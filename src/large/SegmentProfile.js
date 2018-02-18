import React from "react"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Row, Col, Button } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import PageText from "../medium/PageText"

import ActionButton from "../small/ActionButton"

const SegmentProfile = ({ profile }) => {
  return (
    <Row id="SegmentProfile" className="center">
      <Col xs={12} md={8}>
        <Row>
          <Col>
            <Link to={`/profile/${profile.username}`}>
              <PageTitle>@{profile.username}</PageTitle>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>"name"</PageSubtitle>
            <PageSubtitle>"bio"</PageSubtitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/settings">
              <Button>Edit My Profile</Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="m-3">
              <h3>"list of posts"</h3>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SegmentProfile
