import React from "react"
import { Nav } from "reactstrap"

import NavLink from "../small/NavLink"

const style = {
  display: "flex",
  justifyContent: "center"
}

const TOPICS = [
  {
    title: "All",
    path: "/topics"
  },
  {
    title: "Technology",
    path: "/t/technology"
  },
  {
    title: "Design",
    path: "/t/design"
  },
  {
    title: "Software",
    path: "/t/software"
  },
  {
    title: "Culture",
    path: "/t/culture"
  }
]

const TopicTags = (props) => (
  <Nav style={style}>
    {TOPICS.map((topic, index) => {
      return (
        <NavLink key={index} to={topic.path}>
          {topic.title}
        </NavLink>
      )
    })}
  </Nav>
)

export default TopicTags
