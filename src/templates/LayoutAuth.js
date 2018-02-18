import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

const LayoutAuth = ({ children }) => (
  <Layout>
    <SegmentCTAHeader />
    <div className="auth layout">{children}</div>
  </Layout>
)

export default LayoutAuth
