import React from "react"
import { Nav } from "reactstrap"

import NavLink from "../small/NavLink"
import TopicText from "../small/TopicText"

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

const TopicTags = props => (
  <Nav className="center nav-topics trimmer">
    {TOPICS.map((topic, index) => {
      return (
        <NavLink key={index} to={topic.path}>
          <TopicText>{topic.title}</TopicText>
        </NavLink>
      )
    })}
  </Nav>
)

export default TopicTags
