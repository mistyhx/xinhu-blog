import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "./index.css"

const ArticlePreview = ({ data, order }) => {
  return (
    <div
      className="preview-container"
      style={{ flexDirection: `${order % 2 == 0 && "row-reverse"}`, borderColor: "var(--gridColor)" }}
    >
      <div
        className="preview-info"
        style={{ borderWidth: `${order % 2 != 0 && "0"}`, borderColor: "var(--gridColor)" }}
      >
        <div className="preview-date">
          <p>{data.frontmatter.date}</p>
        </div>
        <div className="preview-title">
          <Link cover to={`/${data.frontmatter.title}`}>
            <h3>{data.frontmatter.title}</h3>
            <div className="underline" style={{ backgroundColor: `var(--underlineColor)` }} />
          </Link>
        </div>

        <div className="preview-excerpt">
          <p>{data.frontmatter.description}</p>
        </div>
      </div>
      <div
        className="preview-empty"
        style={{ borderWidth: `${order % 2 == 0 && "0"}`, borderColor: "var(--gridColor)" }}
      ></div>
    </div>
  )
}

export default ArticlePreview
