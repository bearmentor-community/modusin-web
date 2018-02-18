import React from "react"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap"

import ActionButton from "../small/ActionButton"

const AuthRegisterForm = props => (
  <Form>
    <FormGroup>
      <Label for="registerName">Name</Label>
      <Input
        id="registerName"
        name="registerName"
        placeholder="Your Full Name"
        type="text"
      />
    </FormGroup>
    <FormGroup>
      <Label for="registerEmail">Email</Label>
      <Input
        id="registerEmail"
        name="registerEmail"
        placeholder="yourname@mail.com"
        type="email"
      />
    </FormGroup>
    <FormGroup>
      <Label for="registerPassword">Password</Label>
      <Input
        id="registerPassword"
        name="registerPassword"
        placeholder="your_secret_password"
        type="password"
      />
    </FormGroup>
    <Button color="success">Register for new account</Button>
  </Form>
)

export default AuthRegisterForm
