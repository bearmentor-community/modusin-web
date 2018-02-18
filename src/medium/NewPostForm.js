import React from "react"
import { Col } from "reactstrap"
import { Form, FormGroup, Input } from "reactstrap"

import ActionButton from "../small/ActionButton"

const NewPostForm = ({ submitNewPostData }) => (
  <Form onSubmit={submitNewPostData}>
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
)

export default NewPostForm
