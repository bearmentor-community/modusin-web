import React from "react"

import ActionButton from "../small/ActionButton"

const ActionButtons = props => (
  <span className="action buttons">
    <ActionButton to="/create">Create Post</ActionButton>
    <ActionButton to="/register">Register</ActionButton>
    <ActionButton to="/login">Login</ActionButton>
  </span>
)

export default ActionButtons
