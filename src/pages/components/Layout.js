import React from "react"
import Navbar from "./Navbar"
import "../../styles/index.scss"

export default function Layout({ children }) {
  return (
    <div classname="layout">
      <Navbar />
      <div classname="content"> {children} </div>
      <footer>
        <p>Copyright 2021 Jakob B</p>
      </footer>
    </div>
  )
}
