import React from "react"
import Layout from "./Layout"

import SegmentActionHeader from "../large/SegmentActionHeader"

const LayoutAuth = props => (
  <Layout>
    <SegmentActionHeader />
    {props.children}
  </Layout>
)

export default LayoutAuth
