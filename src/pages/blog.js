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
        <li>
          <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
          <h2>{data.allMarkdownRemark.edges[0].node.frontmatter.date}</h2>
        </li>
        <br></br>
        <li>
          <h1>{data.allMarkdownRemark.edges[1].node.frontmatter.title}</h1>
          <h2>{data.allMarkdownRemark.edges[1].node.frontmatter.date}</h2>
        </li>
      </ol>
    </Layout>
  )
}
export default Blog
