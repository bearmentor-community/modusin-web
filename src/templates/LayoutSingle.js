import React from "react"
import Layout from "./Layout"

const LayoutDefault = (props) => (
  <Layout>
    <h1>LOGO</h1>
    {props.children}
  </Layout>
)

export default LayoutDefault
