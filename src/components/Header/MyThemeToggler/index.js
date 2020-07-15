import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import "./index.css"

class MyThemeToggler extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label className="switch">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            {theme === "dark" ? "dark" : "light"}
            <span className="slider"></span>
          </label>
        )}
      </ThemeToggler>
    )
  }
}

export default MyThemeToggler
