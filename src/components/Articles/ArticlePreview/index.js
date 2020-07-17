import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./index.css"

const ArticlePreview = ({ data, order }) => {
  return (
    <div
      className="preview-container"
      style={{ flexDirection: `${order % 2 === 0 && "row-reverse"}`, borderColor: "var(--gridColor)" }}
    >
      <div
        className="preview-info"
        style={{ borderWidth: `${order % 2 !== 0 && "0"}`, borderColor: "var(--gridColor)" }}
      >
        {data.frontmatter.featuredImage && (
          <Link to={data.frontmatter.title}>
            <Img fluid={data.frontmatter.featuredImage.childImageSharp.fluid} />
          </Link>
        )}
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
      <div
        className="preview-empty"
        style={{ borderWidth: `${order % 2 === 0 && "0"}`, borderColor: "var(--gridColor)" }}
      ></div>
    </div>
  )
}

export default ArticlePreview
