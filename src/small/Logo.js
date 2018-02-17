import React from "react"
import { Link } from "react-router-dom"

const style = {
  textAlign: "center",
  fontWeight: "bold",
  textDecoration: "none",
  color: "black"
}

const Logo = (props) => (
  <Link to="/" style={style}>
    <h1>Modusin</h1>
  </Link>
)

export default Logo
