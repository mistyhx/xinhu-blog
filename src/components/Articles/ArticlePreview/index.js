import React from "react"
import { Link } from "gatsby"
import "./index.css"

const ArticlePreview = ({ data }) => {
  return (
    <div className="preview-container">
      <div className="preview-date">
        <p>{data.frontmatter.date}</p>
      </div>
      <div className="preview-title">
        <Link to={data.frontmatter.title}>
          <h2>{data.frontmatter.title}</h2>
          <div className="underline" style={{ backgroundColor: `var(--underlineColor)` }} />
        </Link>
      </div>

      <div className="preview-excerpt">
        <p>{data.frontmatter.description}</p>
      </div>
    </div>
  )
}

export default ArticlePreview
