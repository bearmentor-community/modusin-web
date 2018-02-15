import React, { Component } from 'react'
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import TOPICS from '../../data/topic'

export default class TopicBar extends Component {
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Menu>
          { TOPICS.map( TOPIC =>
          <Menu.Item>
            <Link to='/'>
              <Header size='tiny' color='teal' content={ TOPIC.name } />
            </Link>
          </Menu.Item>
          ) }
        </Menu.Menu>
      </Menu>
    )
  }
}
