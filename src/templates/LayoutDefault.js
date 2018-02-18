import React from "react"
import Layout from "./Layout"

import SegmentActionHeader from "../large/SegmentActionHeader"

import TopicTags from "../medium/TopicTags"

const LayoutDefault = props => (
  <Layout>
    <SegmentActionHeader />
    <TopicTags />
    {props.children}
  </Layout>
)

export default LayoutDefault
