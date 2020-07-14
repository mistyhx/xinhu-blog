import React from "react"
import MyThemeToggler from "./MyThemeToggler"
import "./index.css"

const Header = () => {
  return (
    <div className="header-content">
      <div>
        <h3>XINHUDESIGN</h3>
      </div>
      <MyThemeToggler />
    </div>
  )
}

export default Header
