import React from "react"
import { Link } from "react-router-dom"

import ActionButton from "../small/ActionButton"

const SegmentProfile = props => (
  <div>
    <h2>Profile of {props.match.params.username}</h2>
    <div>
      <Link to="/settings">
        <ActionButton>Go to my settings</ActionButton>
      </Link>
    </div>
  </div>
)

export default SegmentProfile
