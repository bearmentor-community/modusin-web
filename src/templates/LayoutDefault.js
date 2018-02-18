import React from "react"
import Layout from "./Layout"

import SegmentCTAHeader from "../large/SegmentCTAHeader"

import TopicTags from "../medium/TopicTags"

const LayoutDefault = props => (
  <Layout>
    <SegmentCTAHeader />
    <TopicTags />
    <div className="default layout">{props.children}</div>
  </Layout>
)

export default LayoutDefault
