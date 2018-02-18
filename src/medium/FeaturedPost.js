import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import MetaText from "../small/MetaText"

const FeaturedPost = ({ post }) => (
  <Row xs={12}>
    <Col xs={6}>
      <Link to={`/p/${post.id}`}>
        <h3 className="large title">{post.title}</h3>
      </Link>
      <Link to={`/p/${post.id}`}>
        <h4 className="large snippet">{post.snippet}</h4>
      </Link>
      <MetaText size="large">
        by{" "}
        <Link className="meta" to={`/profile/${post.author.username}`}>
          {post.author.name}
        </Link>
      </MetaText>
    </Col>

    <Col xs={5}>
      <Link to={`/p/${post.id}`}>
        <img src={post.image.url} alt={post.image.title} />
      </Link>
    </Col>
  </Row>
)

export default FeaturedPost
