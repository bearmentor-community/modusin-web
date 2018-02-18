import React from "react"
import { Container, Row, Col } from "reactstrap"

import SegmentDebug from "../large/SegmentDebug"
import SegmentContents from "../large/SegmentContents"
import SegmentFooter from "../large/SegmentFooter"

const Layout = props => (
  <Container id="Layout">
    <SegmentDebug />
    <SegmentContents>{props.children}</SegmentContents>
    <SegmentFooter />
  </Container>
)

export default Layout
