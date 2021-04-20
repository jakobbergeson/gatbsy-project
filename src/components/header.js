import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

export default function header() {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Jakob B
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navLink}
              activeClassName={headerStyles.activeNavLink}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
