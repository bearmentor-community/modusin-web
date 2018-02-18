import React from "react"
import { Row, Col } from "reactstrap"

import Logo from "../small/Logo"
import DebugLinks from "../small/DebugLinks"

const ActionBar = props => (
  <Row className="center">
    <Col xs={12}>
      <Logo />
    </Col>
    <Col xs={10}>
      <DebugLinks />
    </Col>
  </Row>
)

export default ActionBar
