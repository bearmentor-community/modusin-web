import React from "react"
import { default as Layout } from "../templates/LayoutSingle"

const Post = ({ match }) => {
  const post = {
    id: match.params.id
  }

  return (
    <Layout>
      <h2>Post id: {post.id}</h2>
    </Layout>
  )
}

export default Post
