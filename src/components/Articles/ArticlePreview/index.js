import React from "react"
import { Link } from "gatsby"
import "./index.css"

const ArticlePreview = ({ data, order }) => {
  console.log(order)
  return (
    <div className="preview-container" style={{ flexDirection: `${order % 2 == 0 && "row-reverse"}` }}>
      <div className="preview-info" style={{ borderWidth: `${order % 2 != 0 && "0"}` }}>
        <div className="preview-date">
          <p>{data.frontmatter.date}</p>
        </div>
        <div className="preview-title">
          <Link to={data.frontmatter.title}>
            <h3>{data.frontmatter.title}</h3>
            <div className="underline" style={{ backgroundColor: `var(--underlineColor)` }} />
          </Link>
        </div>

        <div className="preview-excerpt">
          <p>{data.frontmatter.description}</p>
        </div>
      </div>
      <div className="preview-empty" style={{ borderWidth: `${order % 2 == 0 && "0"}` }}></div>
    </div>
  )
}

export default ArticlePreview
