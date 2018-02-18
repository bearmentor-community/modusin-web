import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

const LayoutDefault = props => (
  <Layout>
    <SegmentCTAHeader />
    {props.children}
  </Layout>
)

export default LayoutDefault
