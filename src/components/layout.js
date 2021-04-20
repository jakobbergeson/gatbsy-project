import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

export default function layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
