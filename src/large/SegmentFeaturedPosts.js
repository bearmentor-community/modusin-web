import React from "react"
import { Row, Col } from "reactstrap"

import FeaturedPost from "../medium/FeaturedPost"

import SectionTitle from "../small/SectionTitle"

const POSTS = [
  {
    id: 0,
    title: "Hello Branding World",
    content:
      "The world of branding is changing very much faster than we predicted",
    snippet:
      "The world of branding is changing very much faster than we predicted...",
    image: {
      title: "Branding Bike",
      url: "http://localhost:3000/images/posts/branding-bike.png"
    },
    author: {
      name: "M Haidar Hanif",
      username: "mhaidarh",
      avatar_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
    }
  },
  {
    id: 1,
    title: "Super Human",
    content: "Human is revolutionizing very much faster than we predicted",
    snippet: "Human is revolutionizing very much faster than we predicted...",
    image: {
      title: "Leadership",
      url: "http://localhost:3000/images/posts/leadership-stage.jpg"
    },
    author: {
      name: "Superman",
      username: "superman",
      avatar_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
    }
  }
]

const SegmentFeaturedPosts = props => (
  <Row>
    <Col>
      <SectionTitle>FEATURED</SectionTitle>
    </Col>
    {POSTS.map((post, index) => {
      return (
        <Col key={index} xs={12}>
          <FeaturedPost post={post} />
        </Col>
      )
    })}
  </Row>
)

export default SegmentFeaturedPosts
