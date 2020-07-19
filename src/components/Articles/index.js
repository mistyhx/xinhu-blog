import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ArticlePreview from "./ArticlePreview"
import "./index.css"

const Tab = ({ title }) => {
  return (
    <div className="tab">
      <div>{title}</div>
      <span className="dot">•</span>
    </div>
  )
}

const Articles = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="articles">
      {/*<div className="tabs">*/}
      {/*  <Tab title="Blog" />*/}
      {/*  <Tab title="Projects" />*/}
      {/*  <Tab title="Illustration" />*/}
      {/*</div>*/}
      <div className="article-list">
        {posts && posts.map((post, index) => <ArticlePreview order={index + 1} key={post.node.id} data={post.node} />)}
      </div>
    </div>
  )
}

export default function ArticleList() {
  //non page components need to query using Static Query
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  description
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => <Articles data={data} />}
    />
  )
}
