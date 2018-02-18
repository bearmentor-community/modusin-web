import React from "react"
import Layout from "./Layout"

import ActionBar from "../medium/ActionBar"

const LayoutAuth = props => (
  <Layout>
    <ActionBar />
    {props.children}
  </Layout>
)

export default LayoutAuth
