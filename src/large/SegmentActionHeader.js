import React from "react"
import { Row, Col } from "reactstrap"

import ActionButtons from "../medium/ActionButtons"

import Logo from "../small/Logo"
import DebugLinks from "../small/DebugLinks"
import ActionButton from "../small/ActionButton"

const SegmentActionHeader = props => (
  <Row className="center">
    <Col xs={12} md={4}>
      <Logo />
    </Col>
    <Col xs={12} md={6}>
      <ActionButtons />
    </Col>
    <Col xs={10}>
      <DebugLinks />
    </Col>
  </Row>
)

export default SegmentActionHeader
