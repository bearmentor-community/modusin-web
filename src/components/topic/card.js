import React, { Component } from 'react'
import { Grid, Card, Header } from 'semantic-ui-react'

import ARTICLES from '../../data/index'

export default class EditorCard extends Component {
  render() {
    return (
      <div>
      <Grid centered columns={1} padded>
        <Grid.Column textAlign='center'>
          <Header size='large' content="Topics" />
        </Grid.Column>
      </Grid>
      <Grid columns={5} padded>
        <Grid.Column>
          <Card color='teal' fluid>
            <Card.Content textAlign='center'>
              <Card.Header>
                <Header size='small' color='teal' content='Technology'/>
              </Card.Header>
            </Card.Content>
            { ARTICLES.map(ARTICLE =>
            <Card.Content textAlign='center' extra>
              <a>
                {ARTICLE.title}
              </a>
            </Card.Content>
            ) }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card color='teal' fluid>
            <Card.Content textAlign='center'>
              <Card.Header>
                <Header size='small' color='teal' content='Computer'/>
              </Card.Header>
            </Card.Content>
            { ARTICLES.map(ARTICLE =>
            <Card.Content textAlign='center' extra>
              <a>
                {ARTICLE.title}
              </a>
            </Card.Content>
            ) }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card color='teal' fluid>
            <Card.Content textAlign='center'>
              <Card.Header>
                <Header size='small' color='teal' content='Artificial Intelligence'/>
              </Card.Header>
            </Card.Content>
            { ARTICLES.map(ARTICLE =>
            <Card.Content textAlign='center' extra>
              <a>
                {ARTICLE.title}
              </a>
            </Card.Content>
            ) }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card color='teal' fluid>
            <Card.Content textAlign='center'>
              <Card.Header>
                <Header size='small' color='teal' content='Augmented Reality'/>
              </Card.Header>
            </Card.Content>
            { ARTICLES.map(ARTICLE =>
            <Card.Content textAlign='center' extra>
              <a>
                {ARTICLE.title}
              </a>
            </Card.Content>
            ) }
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card color='teal' fluid>
            <Card.Content textAlign='center'>
              <Card.Header>
                <Header size='small' color='teal' content='Art'/>
              </Card.Header>
            </Card.Content>
            { ARTICLES.map(ARTICLE =>
            <Card.Content textAlign='center' extra>
              <a>
                {ARTICLE.title}
              </a>
            </Card.Content>
            ) }
          </Card>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
