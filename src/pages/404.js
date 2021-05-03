import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeadTag from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <HeadTag title="404" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Head home</Link>
      </p>
    </Layout>
  )
}
export default NotFound
