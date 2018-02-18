import React from "react"
import { Link } from "react-router-dom"

import "../styles/ul.css"

const DebugLinks = props => (
  <ul>
    <li>
      <Link to="/posts">All Posts</Link>
    </li>
    <li>
      <Link to="/topics">All Topics</Link>
    </li>
    <li>
      <Link to="/p/1">Post with id: 1</Link>
    </li>
    <li>
      <Link to="/t/1">Topic with id: 1</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/setting">Setting</Link>
    </li>
  </ul>
)

export default DebugLinks
