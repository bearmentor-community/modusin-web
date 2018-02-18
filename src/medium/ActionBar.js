import React from "react"
import { Row, Col } from "reactstrap"

import Logo from "../small/Logo"
import DebugLinks from "../small/DebugLinks"

const ActionBar = (props) => (
  <Row>
    <Col>
      <Logo />
      <DebugLinks />
    </Col>
  </Row>
)

export default ActionBar
