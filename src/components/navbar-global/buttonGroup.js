import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

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
        <Button content={contentLogin} color={colorLogin} />
        <Button content={contentSignup} color={colorSignup} />
      </Button.Group>
    )
  }
}
