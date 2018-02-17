import React from "react"
import { Container, Row, Col } from "reactstrap"

const Layout = (props) => (
  <Container>
    <Row>
      <Col>{props.children}</Col>
    </Row>
  </Container>
)

export default Layout
