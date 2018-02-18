import React from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "reactstrap"

import PageTitle from "../medium/PageTitle"
import PageSubtitle from "../medium/PageSubtitle"
import PageText from "../medium/PageText"

import AuthRegisterForm from "../medium/AuthRegisterForm"

const SegmentRegister = props => (
  <Row id="SegmentRegister" className="center">
    <div>
      <Col>
        <PageTitle>Join Modusin</PageTitle>
      </Col>
      <Col>
        <PageSubtitle>Create an account</PageSubtitle>
      </Col>
      <Col>
        <AuthRegisterForm />
      </Col>
      <Col>
        <PageText>
          Already have an account?
          <Link to="/login">Login here</Link>
        </PageText>
      </Col>
    </div>
  </Row>
)

export default SegmentRegister
