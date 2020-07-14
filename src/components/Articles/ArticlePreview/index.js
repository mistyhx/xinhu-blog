import React from "react"
import "./index.css"

const ArticlePreview = ({ data }) => {
  return (
    <div className="preview-container">
      <div className="preview-title">
        <h2>{data.frontmatter.title}</h2>
      </div>
      <div className="preview-excerpt">
        <p>{data.frontmatter.description}</p>
      </div>
      <div className="preview-date">{data.frontmatter.date}</div>
    </div>
  )
}

export default ArticlePreview
