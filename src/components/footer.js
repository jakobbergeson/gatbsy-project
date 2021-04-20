import React from "react"
import { graphql, useStaticQuery } from "gatsby"
const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <footer>Created by {data.site.siteMetadata.author} © 2021</footer>
    </div>
  )
}

export default Footer
