import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import AllPosts from "../redux/containers/AllPosts"

const Posts = props => (
  <Layout>
    <h2>All Available Posts</h2>
    <AllPosts />
  </Layout>
)

export default Posts
