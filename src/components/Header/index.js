import React from "react"
import { Link } from "gatsby"
import MyThemeToggler from "./MyThemeToggler"
import "./index.css"

const Header = () => {
  return (
    <div className="header-content">
      <Link to="/">
        <div>
          <svg
            // style={{ fill: `var(--textNormal)` }}
            width="166"
            height="49"
            viewBox="0 0 166 49"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M7.9 11.2L18.2 13.7L23.9 24.5L34.3 17.6L44 20L27.8 30.2L38.3 48.2L27.7 45.6L21.3 33.8L9.9 41.2L0 38.8L17.6 27.7L7.9 11.2Z"
                // fill="black"
                style={{ fill: `var(--textNormal)` }}
              />
              <path
                d="M53.4004 15.8L58.4004 44L49.4004 45.6L44.4004 17.4L53.4004 15.8Z"
                style={{ fill: `var(--textNormal)` }}
              />
              <path
                d="M66.9996 10.2L90.4996 21.1H90.5996L82.9996 3.4L90.7996 0L102.1 26.4L93.6996 30L70.2996 19.1H70.1996L77.6996 36.8L69.7996 40.2L58.5996 13.8L66.9996 10.2Z"
                style={{ fill: `var(--textNormal)` }}
              />
              <path d="M116.4 21.7L116.1 27.9L107 27.5L107.3 21.3L116.4 21.7Z" style={{ fill: `var(--textNormal)` }} />
              <path
                d="M143.5 6.39999L138 15.9L152.5 24.3L158 14.8L165.9 19.4L151.5 44.2L143.6 39.6L149.8 28.9L135.3 20.5L129.1 31.2L121.2 26.6L135.6 1.79999L143.5 6.39999Z"
                style={{ fill: `var(--textNormal)` }}
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="165.9" height="48.2" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </Link>
      <MyThemeToggler />
    </div>
  )
}

export default Header
