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
  console.log(posts)
  return (
    <div className="articles">
      <div className="tabs">
        <Tab title="Blog" />
        <Tab title="Projects" />
        <Tab title="Illustration" />
      </div>
      {posts && posts.map(post => <ArticlePreview key={post.node.id} data={post.node} />)}
    </div>
  )
}

export default function ArticleList() {
  //non page components need to query using Static Query
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  title
                  date(formatString: "MMMM DD, YYYY")
                  description
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
