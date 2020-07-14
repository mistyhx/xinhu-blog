import React from "react"
import { Link } from "gatsby"
import "./index.css"

const ArticlePreview = ({ data }) => {
  return (
    <div className="preview-container">
      <Link to={data.frontmatter.title}>
        <div className="preview-title">
          <h2>{data.frontmatter.title}</h2>
        </div>
        <div className="preview-excerpt">
          <p>{data.frontmatter.description}</p>
        </div>
        <div className="preview-date">{data.frontmatter.date}</div>
      </Link>
    </div>
  )
}

export default ArticlePreview
