import React from "react"

const LayoutDefault = (props) => (
  <div>
    <h1>LOGO</h1>
    <nav>NAVIGATION</nav>
    {props.children}
  </div>
)

export default LayoutDefault
