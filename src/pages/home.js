import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

import SegmentFeaturedPosts from "../large/SegmentFeaturedPosts"

const POSTS = [
  {
    id: 0,
    title: "Hello World",
    content: "The world is changing very much faster than we predicted",
    snippet: "The world is changing...",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "M Haidar Hanif",
      avatar_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
    }
  },
  {
    id: 1,
    title: "Super Human",
    content: "Human is revolutionizing very much faster than we predicted",
    snippet: "Human is revolutionizing...",
    image: {
      title: "Leadership",
      url: "http://localhost:3000/images/posts/leadership-stage.jpg"
    },
    author: {
      name: "Superman",
      avatar_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
    }
  }
]

const Home = (props) => (
  <Layout>
    <SegmentFeaturedPosts posts={POSTS} />
  </Layout>
)

export default Home
