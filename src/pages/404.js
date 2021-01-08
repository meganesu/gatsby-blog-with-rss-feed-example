import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={{
      fontFamily: "Helvetica, sans-serif",
      margin: "auto",
      maxWidth: "550px",
      padding: "1rem 2rem",
    }}>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn’t find what you were looking for.
      </p>
      <p>
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
