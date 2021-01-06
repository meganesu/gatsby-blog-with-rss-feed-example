import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  return (
    <main
      style={{
        fontFamily: "Helvetica, sans-serif",
        margin: "auto",
        maxWidth: "550px",
        padding: "1rem 2rem",
      }}
    >
      <title>My Personal Blog</title>
      <h1 style={{ color: "rebeccapurple" }}>
        Welcome to my blog!
      </h1>
      <ul
        style={{
          padding: 0,
          marginTop: "3rem",
        }}
      >
        {
          data.allMarkdownRemark.nodes.map(node => (
            <li style={{ listStyle: "none" }}>
              <h2>
                {node.frontmatter.title}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: node.html }}
                style={{ lineHeight: "1.5rem" }}
              />
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
        html
      }
    }
  }
`

export default IndexPage
