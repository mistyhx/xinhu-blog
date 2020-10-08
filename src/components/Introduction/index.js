import React from "react"
import { GithubOutlined, DribbbleOutlined } from "@ant-design/icons"
import "./index.css"

const Introduction = () => {
  return (
    <div>
      <h2 style={{ marginBottom: `3.5rem` }}>
        <div className="greeting-symbol" role="img" aria-label="greeting">
          👋
        </div>
        Hi There,
      </h2>
      <p>
        I am {""}
        <a href="https://www.linkedin.com/in/xinhuuidesign/" target="_blank" rel="external">
          Xin Hu
        </a>
        , a designer who create design ideas with code. Contact me via{" "}
        <a href="mailto:hxmisty@gmail.com">hxmisty@gmail.com</a>
      </p>
      <div>
        <h4>Check me out also @:</h4>
        <div className="icon-list">
          <a href="https://github.com/mistyhx/" target="_blank" rel="external">
            <GithubOutlined style={{ fontSize: 32, paddingRight: `1rem` }} />
          </a>
          <a href="https://dribbble.com/mistyhx/" target="_blank" rel="external">
            <DribbbleOutlined style={{ fontSize: 32 }} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction
