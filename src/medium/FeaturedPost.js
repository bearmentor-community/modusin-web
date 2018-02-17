import React from "react"

const FeaturedPost = ({ post }) => (
  <div>
    <h3>{post.title}</h3>
    <h4>{post.snippet}</h4>
    <img src={post.image.url} alt={post.image.title} />
  </div>
)

export default FeaturedPost
