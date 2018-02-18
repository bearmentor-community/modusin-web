import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

const LayoutAuth = props => (
  <Layout>
    <SegmentCTAHeader />
    <div className="auth layout">{props.children}</div>
  </Layout>
)

export default LayoutAuth
