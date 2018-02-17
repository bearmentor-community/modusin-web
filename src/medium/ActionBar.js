import React from "react"
import { Container, Row, Col } from "reactstrap"

import TopicTags from "./TopicTags"

import Logo from "../small/Logo"

const ActionBar = (props) => (
  <Row>
    <Col>
      <Logo />
      <TopicTags />
    </Col>
  </Row>
)

export default ActionBar
