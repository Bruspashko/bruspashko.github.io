import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
export default () => (
    <Layout> 
        <Helmet>
            <title>About</title>
            <link rel="canonical" href="http://mysite.com/about" />
        </Helmet>
        <h1>About me</h1>
        <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    </Layout> 
)