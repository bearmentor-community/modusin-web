import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

import TopicTags from "../medium/TopicTags"

const LayoutDefault = ({ children }) => (
  <Layout>
    <SegmentCTAHeader />
    <TopicTags />
    <div className="default layout">{children}</div>
  </Layout>
)

export default LayoutDefault
