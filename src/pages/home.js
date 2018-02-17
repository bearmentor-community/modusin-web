import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import SegmentFeaturedPosts from "../large/SegmentFeaturedPosts"
import SegmentLatestPosts from "../large/SegmentLatestPosts"

const Home = (props) => (
  <Layout>
    <SegmentFeaturedPosts />
    <SegmentLatestPosts />
  </Layout>
)

export default Home
