import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import PageText from "../medium/PageText"

import ActionButton from "../small/ActionButton"

const SegmentProfile = props => (
  <Row id="SegmentProfile" className="center text-center">
    <div>
      <Col>
        <Link to={`/profile/${props.profile.username}`}>
          <PageTitle>@{props.profile.username}</PageTitle>
        </Link>
      </Col>
      <Col>
        <PageSubtitle>"name"</PageSubtitle>
        <PageSubtitle>"bio"</PageSubtitle>
        <PageSubtitle>"list of posts"</PageSubtitle>
      </Col>
      <Col>
        <PageText>
          <Link to="/settings">
            <ActionButton>Edit My Profile</ActionButton>
          </Link>
        </PageText>
      </Col>
    </div>
  </Row>
)

export default SegmentProfile
