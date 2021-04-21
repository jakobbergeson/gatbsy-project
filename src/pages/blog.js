import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here</p>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h1>{edge.node.frontmatter.title}</h1>
              <h2>{edge.node.frontmatter.date}</h2>
              <br></br>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default Blog
