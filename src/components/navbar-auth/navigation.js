import React, { Component } from 'react'
import { 
  Menu, 
  Input, 
  Header, 
} from 'semantic-ui-react'

import UserButton from './buttonGroup'

export default class Navigation extends Component {
  render() {
    return (
        <Menu secondary>
          <Menu.Menu position='left'>
            <Menu.Item>
              <Header
                size='huge'
                content='Modusin.'
                color='teal'
              />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                action={
                  {
                    icon: 'search',
                    color: 'blue'
                  }
                }
                placeholder='Search'
              />
            </Menu.Item>
            <Menu.Item>
              <UserButton
                text='Agtamas Miftahul'
                icon='user circle'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}
