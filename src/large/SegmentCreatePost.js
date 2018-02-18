import React from "react"
import { Row, Col } from "reactstrap"
import { Button, Form, FormGroup, Input } from "reactstrap"

import SectionTitle from "../small/SectionTitle"

const SegmentCreatePost = props => (
  <Row id="SegmentCreatePost" className="center">
    <Col xs={12} md={8}>
      <SectionTitle>WRITE NEW POST</SectionTitle>
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
              rows={15}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Button>Save Post</Button>
          </Col>
        </FormGroup>
      </Form>
    </Col>
  </Row>
)

export default SegmentCreatePost
