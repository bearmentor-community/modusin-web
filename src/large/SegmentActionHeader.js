import React from "react"
import { Row, Col } from "reactstrap"

import Logo from "../small/Logo"
import SearchBox from "../small/SearchBox"
import ActionButtons from "../medium/ActionButtons"
import ActionAvatar from "../small/ActionAvatar"

const account = {
  name: "M Haidar Hanif",
  username: "mhaidarh",
  image_url: "http://localhost:3000/images/avatars/mhaidarh.jpg"
}

const SegmentActionHeader = props => (
  <Row id="SegmentActionHeader" className="center">
    <Col xs={12} md={2}>
      <Logo />
    </Col>
    <Col xs={12} md={10} className="column right">
      <SearchBox />
      <ActionButtons />
      <ActionAvatar to={`/profile/${account.username}`} account={account} />
    </Col>
  </Row>
)

export default SegmentActionHeader
