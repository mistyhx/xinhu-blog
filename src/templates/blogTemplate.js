import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/SideBar"
import SideArticleList from "../components/SideArticleList"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, id } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <SideBar>
        <h2 style={{ marginBottom: `3.5rem` }}>👀 Read More</h2>
        <SideArticleList id={id} />
      </SideBar>
      <div className="blog-post-container">
        <div className="blog-post">
          <p style={{ opacity: 0.5 }}>{frontmatter.date}</p>
          <h1>{frontmatter.title}</h1>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
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
