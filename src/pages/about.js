import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function about() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>This Is my Bio talking about Me, Mself, and I</p>
      <p>
        Web Developer from San Diego with strong analytical and communication
        skills. Passionate about applying creative solutions to web application
        development. Backed by 8+ years of customer service experience that
        focused on communication and teamwork.
      </p>
      <p>
        Are you looking for a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}
