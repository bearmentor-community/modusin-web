import React from "react"
import { Link } from "react-router-dom"

const FooterText = props => (
  <Link to={props.to} className="footer text">
    {props.children}
  </Link>
)

export default FooterText
