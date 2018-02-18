import React from "react"
import { Row, Col } from "reactstrap"
import { Form, FormGroup, Input } from "reactstrap"

import SectionTitle from "../small/SectionTitle"
import ActionButton from "../small/ActionButton"

const SegmentNewPost = props => (
  <Row id="SegmentNewPost" className="center">
    <Col xs={12} md={8}>
      <SectionTitle>Write New Post</SectionTitle>
    </Col>
    <Col xs={12} md={8}>
      <Form>
        <FormGroup row>
          <Col>
            <Input
              type="text"
              name="postTitle"
              id="postTitle"
              placeholder="Your post title here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="textarea"
              name="postContent"
              id="postContent"
              placeholder="Write your post story here...."
              rows={12}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <ActionButton>Save Post</ActionButton>
          </Col>
        </FormGroup>
      </Form>
    </Col>
  </Row>
)

export default SegmentNewPost
