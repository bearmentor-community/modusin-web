import React from "react"
import Layout from "./Layout"

const LayoutDefault = (props) => (
  <Layout>
    <h1>LOGO</h1>
    <nav>NAVIGATION</nav>
    {props.children}
  </Layout>
)

export default LayoutDefault
