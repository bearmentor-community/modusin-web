import React, { Component } from 'react'
import { Grid, Divider } from 'semantic-ui-react'

import TopicBar from '../components/topic-bar'
import EditorPick from '../components/editor-pick/card'
import Topics from '../components/topic/card'
import Footer from '../components/footer'

import 'semantic-ui-css/semantic.min.css'

export default class App extends Component {
  render() {
    return (
      <Grid centered columns={1} padded>
        <Grid.Column>
          <TopicBar />
        </Grid.Column>
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
