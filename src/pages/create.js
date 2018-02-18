import React from "react"
import { Row, Col } from "reactstrap"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

import { default as Layout } from "../templates/LayoutSingle"

const Create = (props) => (
  <Layout>
    <Row className="center">
      <Col xs={10}>
        <h3>Create New Post</h3>
      </Col>
      <Col xs={10}>
        <Form>
          <FormGroup row>
            <Col>
              <Input
                type="text"
                name="post-title"
                id="post-title"
                placeholder="Your post title here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Input
                type="textarea"
                name="text"
                id="exampleext"
                placeholder="Write your post story here...."
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
  </Layout>
)

export default Create
