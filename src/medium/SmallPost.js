import React from "react"

const SmallPost = ({ post }) => (
  <div>
    <span>{post.title}</span>
    <img src={post.image.url} alt={post.image.title} height={150} />
  </div>
)

export default SmallPost
