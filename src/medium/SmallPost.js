import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import MetaText from "../small/MetaText"

const SmallPost = ({ post }) => (
  <Row xs={8} className="center">
    <Col xs={6}>
      <Link to={`/p/${post.id}`} className="divlink">
        <h3 className="small title">{post.title}</h3>
      </Link>
      <MetaText size="small">
        by{" "}
        <Link className="meta" to={`/profile/${post.author.username}`}>
          {post.author.name}
        </Link>
      </MetaText>
    </Col>
    <Col xs={2}>
      <Link to={`/p/${post.id}`} className="divlink">
        <img
          className="small image"
          src={post.image.url}
          alt={post.image.title}
        />
      </Link>
    </Col>
  </Row>
)

export default SmallPost
