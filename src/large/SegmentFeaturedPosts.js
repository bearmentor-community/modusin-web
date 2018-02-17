import React from "react"
import { Row, Col } from "reactstrap"

import FeaturedPost from "../medium/FeaturedPost"

const SegmentFeaturedPosts = (props) => (
  <Row>
    {props.posts.map((post, index) => {
      return (
        <Col key={index}>
          <FeaturedPost post={post} />
        </Col>
      )
    })}
  </Row>
)

export default SegmentFeaturedPosts
