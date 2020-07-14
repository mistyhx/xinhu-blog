import React from "react"
import { GithubOutlined, DribbbleOutlined } from "@ant-design/icons"
import "./index.css"

const Introduction = () => {
  return (
    <div>
      <h2 style={{ marginBottom: `3.5rem` }}>👋 Hi There,</h2>
      <p>
        I am {""}
        <a href="https://www.linkedin.com/in/xinhuuidesign/" target="_blank">
          Xin Hu
        </a>
        , a designer who create design ideas with code. Contact me via <a href="mailto:hxmisty@gmail.com">email</a>
      </p>
      <div>
        <h4>Check me out also @:</h4>
        <div className="icon-list">
          <a href="" target="_blank">
            <GithubOutlined />
          </a>
          <a href="" target="_blank">
            <DribbbleOutlined />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction
