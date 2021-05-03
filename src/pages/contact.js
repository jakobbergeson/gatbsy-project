import React from "react"
import Layout from "../components/layout"
import HeadTag from "../components/head"

const Contact = () => {
  return (
    <Layout>
      <HeadTag title="Contact" />
      <h1>Contact Me!</h1>
      <p>Here's My email: jakobbergeson.dev@gmail.com</p>
      <p>
        Here's my{" "}
        <a
          href="https://www.linkedin.com/in/jakob-bergeson-a2b078102/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  )
}
export default Contact
