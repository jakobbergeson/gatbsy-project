import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm Jakob, a full-stack developer from San Diego</h2>
      <p>
        Need a Developer? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
