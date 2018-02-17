import React from "react"
import { Link } from "react-router-dom"
import { NavLink } from "reactstrap"

const CustomNavLink = (props) => (
  <NavLink>
    <Link to={props.to}>{props.children}</Link>
  </NavLink>
)

export default CustomNavLink
