import React from "react"
import { Link } from "react-router-dom"

const CTAAvatar = props => {
  const account = props.account

  return (
    <span className="cta avatar">
      <Link to={props.to}>
        <img src={account.image_url} alt={account.name} />
      </Link>
    </span>
  )
}

export default CTAAvatar
