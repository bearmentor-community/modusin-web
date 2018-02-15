import React, { Component } from 'react'
import { Menu, Input, Header } from 'semantic-ui-react'

import ButtonGroup from './buttonGroup'

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
              <ButtonGroup
                contentLogin = 'Login'
                contentSignup = 'Sign up'
                colorLogin = 'blue'
                colorSignup = 'green'
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    )
  }
}
