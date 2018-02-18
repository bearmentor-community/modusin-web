import React from "react"
import { Row, Col } from "reactstrap"
import { Link } from "react-router-dom"

import Logo from "../small/Logo"

const ActionBar = (props) => (
  <Row>
    <Col>
      <Logo />
      <ul>
        <li>
          <Link to="/posts">All Posts</Link>
        </li>
        <li>
          <Link to="/topics">All Topics</Link>
        </li>
        <li>
          <Link to="/p/1">Post with id: 1</Link>
        </li>
        <li>
          <Link to="/t/1">Topic with id: 1</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create">Create Post</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/setting">Setting</Link>
        </li>
      </ul>
    </Col>
  </Row>
)

export default ActionBar
