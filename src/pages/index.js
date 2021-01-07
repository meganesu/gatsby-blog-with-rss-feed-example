import * as React from "react"
import { graphql, Link } from "gatsby"

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
        My Blog Posts
      </h1>
      <ul
        style={{
          padding: 0,
          marginTop: "3rem",
        }}
      >
        {
          data.allMarkdownRemark.nodes.map(post => (
            <li
              style={{
                listStyle: "none",
              }}
            >
              <Link
                to={post.postPath}
                style={{ color: "black" }}
              >
                <h2>
                  {post.frontmatter.title}
                </h2>
              </Link>
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
        }
        html
        postPath: gatsbyPath(filePath: "/{MarkdownRemark.frontmatter__title}")
      }
    }
  }
`

export default IndexPage
