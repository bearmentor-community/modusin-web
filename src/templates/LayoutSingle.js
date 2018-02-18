import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

const LayoutDefault = props => (
  <Layout>
    <SegmentCTAHeader />
    <div className="single layout">{props.children}</div>
  </Layout>
)

export default LayoutDefault
