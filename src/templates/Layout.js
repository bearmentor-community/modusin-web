import React from "react"
import { Container } from "reactstrap"

import SegmentDebug from "../large/SegmentDebug"
import SegmentMain from "../large/SegmentMain"
import SegmentFooter from "../large/SegmentFooter"

const Layout = props => (
  <Container id="Layout">
    <SegmentDebug active={false} />
    <SegmentMain>{props.children}</SegmentMain>
    <SegmentFooter />
  </Container>
)

export default Layout
