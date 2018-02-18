import React from "react"
import { Link } from "react-router-dom"

const ActionButton = props => (
  <Link to={props.to}>
    <button className="action button">{props.children}</button>
  </Link>
)

export default ActionButton
