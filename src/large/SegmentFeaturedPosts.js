import React from "react"
import { Row, Col } from "reactstrap"

const SegmentFeaturedPosts = (props) => (
  <Row>
    {props.posts.map((post, index) => {
      return (
        <Col key={index}>
          <div>
            <h3>{post.title}</h3>
            <h4>{post.snippet}</h4>
            <img src={post.image.url} alt={post.image.title} />
          </div>
        </Col>
      )
    })}
  </Row>
)

export default SegmentFeaturedPosts
