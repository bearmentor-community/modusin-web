import React from "react"
import Layout from "./Layout"

import ActionBar from "../medium/ActionBar"
import TopicTags from "../medium/TopicTags"

const LayoutDefault = (props) => (
  <Layout>
    <ActionBar />
    <TopicTags />
    {props.children}
  </Layout>
)

export default LayoutDefault
