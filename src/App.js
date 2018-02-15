import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import Navigation from './components/navbar-global/navigation'
import  Homepage from './pages/homepage-global'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Grid centered columns={1} padded>
          <Grid.Column>
            <Navigation />
          </Grid.Column>
          <Grid.Column>
            <Route exact path='/' component={Homepage} />
          </Grid.Column>
        </Grid>
      </Router>
    )
  }
}