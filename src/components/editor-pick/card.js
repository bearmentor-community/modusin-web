import React, { Component } from 'react'
import { Grid, Card, Image, Header } from 'semantic-ui-react'

import ARTICLES from '../../data/index'

export default class EditorCard extends Component {
  render() {
    return (
      <div>
      <Grid columns={1} padded>
        <Grid.Column>
          <Header size='large' content="Editor's pick" />
        </Grid.Column>
      </Grid>
      <Grid centered columns={5} padded>
        { ARTICLES.map(ARTICLE =>
        <Grid.Column>
          <Card color='teal' fluid>
            <Image src={ARTICLE.image_url} size='medium'/>
            <Card.Content textAlign='center'>
              <Card.Header>
                {ARTICLE.title}
              </Card.Header>
              <Card.Meta>
                {ARTICLE.created_at}
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
        ) }
      </Grid>
      </div>
    )
  }
}
