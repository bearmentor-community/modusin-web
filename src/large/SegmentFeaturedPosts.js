import React from "react"
import { Row, Col } from "reactstrap"

import FeaturedPost from "../medium/FeaturedPost"

const POSTS = [
  {
    id: 0,
    title: "Hello Branding World",
    content:
      "The world of branding is changing very much faster than we predicted",
    snippet: "The world of branding is changing...",
    image: {
      title: "Branding Bike",
      url: "http://localhost:3000/images/posts/branding-bike.png"
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

const SegmentFeaturedPosts = (props) => (
  <Row>
    {POSTS.map((post, index) => {
      return (
        <Col key={index}>
          <FeaturedPost post={post} />
        </Col>
      )
    })}
  </Row>
)

export default SegmentFeaturedPosts
