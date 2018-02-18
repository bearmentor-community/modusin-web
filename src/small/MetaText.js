import React from "react"

const MetaText = props => {
  const size = props.size

  return size === "small" ? (
    <span className="small meta">{props.children}</span>
  ) : size === "medium" ? (
    <span className="medium meta">{props.children}</span>
  ) : size === "large" ? (
    <span className="large meta">{props.children}</span>
  ) : (
    <span className="meta">{props.children}</span>
  )
}

export default MetaText
