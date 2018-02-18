import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

import ActionButton from "../small/ActionButton"

const AuthLoginForm = props => (
  <Form>
    <FormGroup>
      <Label for="loginName">Name</Label>
      <Input
        id="loginName"
        name="loginName"
        placeholder="Your Full Name"
        type="text"
      />
    </FormGroup>
    <FormGroup>
      <Label for="loginEmail">Email</Label>
      <Input
        id="loginEmail"
        name="loginEmail"
        placeholder="yourname@mail.com"
        type="email"
      />
    </FormGroup>
    <FormGroup>
      <Label for="loginPassword">Password</Label>
      <Input
        id="loginPassword"
        name="loginPassword"
        placeholder="your_secret_password"
        type="password"
      />
    </FormGroup>
    <Button color="primary">Login to my account</Button>
  </Form>
)

export default AuthLoginForm
