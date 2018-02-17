import React from "react"
import Layout from "./Layout"

const LayoutAuth = (props) => (
  <Layout>
    <h2>AUTH</h2>
    {props.children}
  </Layout>
)

export default LayoutAuth
