import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class HeaderButtonGroup extends Component {
  render() {
    const {
      contentLogin,
      colorLogin,
      contentSignup,
      colorSignup
    } = this.props
    return (
      <Button.Group>
        <Link to='/login'><Button content={contentLogin} color={colorLogin} /></Link>
        <Link to='/signup'><Button content={contentSignup} color={colorSignup} /></Link>
      </Button.Group>
    )
  }
}
