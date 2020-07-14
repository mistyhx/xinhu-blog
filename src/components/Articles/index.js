import React from "react"
import ArticlePreview from "./ArticlePreview"
import "./index.css"

const Tab = ({ title }) => {
  return (
    <div className="tab">
      <div>{title}</div>
      <div className="div">/</div>
    </div>
  )
}

const Articles = () => {
  return (
    <div className="articles">
      <div className="tabs">
        <Tab title="Blog" />
        <Tab title="Projects" />
        <Tab title="Illustration" />
      </div>
      <ArticlePreview />
      <ArticlePreview />
    </div>
  )
}

export default Articles
