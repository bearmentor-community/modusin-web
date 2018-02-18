import React from "react"
import { default as Layout } from "../templates/LayoutSingle"

const Post = (props) => (
  <Layout>
    <h2>Post id: {props.match.params.id}</h2>
  </Layout>
)

export default Post
