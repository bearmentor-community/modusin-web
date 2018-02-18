import React from "react"
import { Link } from "react-router-dom"

const ActionAvatar = props => {
  const account = props.account

  return (
    <span className="action avatar">
      <Link to={props.to}>
        <img src={account.image_url} alt={account.name} />
      </Link>
    </span>
  )
}

export default ActionAvatar
