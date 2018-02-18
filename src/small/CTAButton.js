import React from "react"
import { Link } from "react-router-dom"

const CTAButton = props => (
  <Link to={props.to}>
    <button className="cta button">{props.children}</button>
  </Link>
)

export default CTAButton
