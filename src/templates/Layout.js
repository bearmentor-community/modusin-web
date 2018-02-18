import React from "react"
import { Container, Row, Col } from "reactstrap"

import SegmentDebug from "../large/SegmentDebug"
import SegmentFooter from "../large/SegmentFooter"

const Layout = props => (
  <Container>
    <SegmentDebug />
    <Row>
      <Col>{props.children}</Col>
    </Row>
    <SegmentFooter />
  </Container>
)

export default Layout
