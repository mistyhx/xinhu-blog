import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import "./index.css"

const SideArticles = ({ data, id }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(id)
  return (
    <ul className="side-list">
      {posts &&
        posts.map(post => (
          <li key={post.node.id} style={{ display: `${post.node.id === id && "none"}` }}>
            <p style={{ opacity: 0.5 }}>{post.node.frontmatter.date}</p>
            <Link to={`/${post.node.frontmatter.title}`}>
              <h4>{post.node.frontmatter.title}</h4>
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default function SideArticleList(props) {
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
                }
              }
            }
          }
        }
      `}
      render={data => <SideArticles data={data} {...props} />}
    />
  )
}
