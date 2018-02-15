import React, { Component } from 'react'
import { Button, Dropdown } from 'semantic-ui-react'

export default class UserButtonGroup extends Component {
  render() {
    const options = [
      { 
        key: 1, 
        text: 'Profile', 
        value: 1 
      },
      { 
        key: 2, 
        text: 'Log out', 
        value: 2 
      },
    ]
    
    const {
      text,
      icon,
    } = this.props
    
    return (
      <Button.Group color='teal'>
        <Dropdown 
          text={text}
          icon={icon} 
          floating 
          labeled 
          button
          className='icon' 
          options={options} 
        />
      </Button.Group>
    )
  }
}
