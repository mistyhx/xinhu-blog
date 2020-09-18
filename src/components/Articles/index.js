import React, {useState} from "react"
import { StaticQuery, graphql } from "gatsby"
import ArticlePreview from "./ArticlePreview"
import "./index.css"


const Articles = ({ data }) => {
  const [category, setCategory] = useState("projects")
  const { edges: posts } = data.allMarkdownRemark
  const filteredPosts = posts.filter(post => post.node.frontmatter.category === category)
  return (
    <div className="articles">
      <div className="filters">
        <button style={{backgroundColor:category === "projects"&& "#d5d5d5" }} onClick={()=>setCategory('projects')}>Projects</button>
        <button style={{backgroundColor:category === "mini-projects"&& "#d5d5d5" }} onClick={()=>setCategory('mini-projects')}>Mini Projects</button>
        <button style={{backgroundColor:category === "illustration"&& "#d5d5d5" }} onClick={()=>setCategory('illustration')}>Illustration</button>
        <button style={{backgroundColor:category === "tutorials"&& "#d5d5d5" }} onClick={()=>setCategory('tutorials')}>Tutorials</button> </div>
      <div className="article-list">
        {filteredPosts && filteredPosts.map((post, index) => <ArticlePreview order={index + 1} key={post.node.id} data={post.node} />)}
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
                  category
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
