import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

const LayoutDefault = ({ children }) => (
  <Layout>
    <SegmentCTAHeader className="post header" />
    <div className="single layout">{children}</div>
  </Layout>
)

export default LayoutDefault
