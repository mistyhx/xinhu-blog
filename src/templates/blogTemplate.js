import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/SideBar"
import SideArticleList from "../components/SideArticleList"
import "./blogTemplate.css"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <div className="wrapper">
      <Layout>
        <SEO title={frontmatter.title} />
        <SideBar>
          <h2 className="read-more" style={{ marginBottom: `3.5rem` }}>
            <div className="eyes-symbol" role="img" aria-label="read">
              <div className="eye"><div className="eye-ball"><div className="eye-light"/></div></div>
              <div className="eye"><div className="eye-ball"><div className="eye-light"/></div></div>
            </div>
            Read More
          </h2>
          <SideArticleList id={id} />
        </SideBar>
        <div className="blog-post-container">
          <div className="blog-post">
            <p className="blog-date" style={{ opacity: 0.5 }}>
              {frontmatter.date}
            </p>
            <h1 className="blog-title">{frontmatter.title}</h1>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </Layout>
      <div className="cover" style={{ backgroundColor: "var(--bg)" }} />
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
