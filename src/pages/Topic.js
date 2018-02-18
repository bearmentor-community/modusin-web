import React from "react"
import { default as Layout } from "../templates/LayoutDefault"

const Topic = (props) => (
  <Layout>
    <h2>Topic about {props.match.params.id}</h2>
  </Layout>
)

export default Topic
