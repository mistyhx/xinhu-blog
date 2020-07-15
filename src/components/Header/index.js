import React from "react"
import MyThemeToggler from "./MyThemeToggler"
import logo from "../../images/logo.svg"
import "./index.css"

const Header = () => {
  return (
    <div className="header-content">
      <div>
        <img alt="xinhudesign" src={logo} />
      </div>
      <MyThemeToggler />
    </div>
  )
}

export default Header
