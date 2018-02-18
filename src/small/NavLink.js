import React from "react"
import { Link } from "react-router-dom"

const NavLink = props => (
  <span className="nav-link">
    <Link to={props.to}>{props.children}</Link>
  </span>
)

export default NavLink
