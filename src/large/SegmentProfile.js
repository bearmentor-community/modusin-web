import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import PageText from "../medium/PageText"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({ profile }) => {
  return (
    <Row id="SegmentProfile" className="center">
      <div>
        <Col>
          <Link to={`/profile/${profile.username}`}>
            <PageTitle>@{profile.username}</PageTitle>
          </Link>
        </Col>
        <Col>
          <PageSubtitle>"name"</PageSubtitle>
          <PageSubtitle>"bio"</PageSubtitle>
          <PageSubtitle>"list of posts"</PageSubtitle>
        </Col>
        <Col>
          <Link to="/settings">
            <ActionButton>Edit My Profile</ActionButton>
          </Link>
        </Col>
      </div>
    </Row>
  )
}

export default SegmentProfile
