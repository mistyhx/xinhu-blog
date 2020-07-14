import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideBar from "../components/SideBar"

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO />
      <SideBar>
        <h2 style={{ marginBottom: `3.5rem` }}>👀 Read More</h2>
        Some Other Articles lalallal
        <ul>
          <li>I am a list</li>
        </ul>
      </SideBar>
      <div className="blog-post-container">
        <div className="blog-post">
          <h5>{frontmatter.date}</h5>
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
