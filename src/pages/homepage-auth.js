import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'

import EditorPick from '../components/editor-pick/card'
import Topics from '../components/topic/card'
import Footer from '../components/footer'

import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
  render() {
    return (
      <Grid columns={1} padded>
        <Grid.Column>
          <EditorPick />
        </Grid.Column>
        <Grid.Column>
          <Topics />
        </Grid.Column>
        <Divider hidden />
        <Grid.Column>
          <Footer />
        </Grid.Column>
      </Grid>
    )
  }
}
