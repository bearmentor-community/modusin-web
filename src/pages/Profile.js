import React from "react"
import { Link } from "react-router-dom"

import { default as Layout } from "../templates/LayoutSingle"

const Profile = props => (
  <Layout>
    <h2>Profile of {props.match.params.username}</h2>
    <div>
      <Link to="/setting">
        <button>Go to setting</button>
      </Link>
    </div>
  </Layout>
)

export default Profile
