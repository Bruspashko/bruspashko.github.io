import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default () => (
  <Layout>
    <Helmet>
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/contact" />
    </Helmet>
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
)