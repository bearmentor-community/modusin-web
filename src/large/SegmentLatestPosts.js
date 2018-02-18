import React from "react"
import { Row, Col } from "reactstrap"

import SmallPost from "../medium/SmallPost"

import SectionTitle from "../small/SectionTitle"

const POSTS = [
  {
    id: 10,
    title: "One One One",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "One Punch Man"
    }
  },
  {
    id: 20,
    title: "Two Two Two",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Two Times"
    }
  },
  {
    id: 30,
    title: "Three Three Three",
    image: {
      title: "Abstract",
      url: "http://localhost:3000/images/posts/abstract.jpg"
    },
    author: {
      name: "Three Tree"
    }
  }
]

const SegmentLatestPosts = props => (
  <Row id="SegmentLatestPosts" xs={8}>
    <Col xs={12}>
      <SectionTitle>Latest posts for you</SectionTitle>
    </Col>
    {POSTS.map((post, index) => {
      return (
        <Col key={index} xs={12} md={8} lg={6}>
          <SmallPost post={post} />
        </Col>
      )
    })}
  </Row>
)

export default SegmentLatestPosts
