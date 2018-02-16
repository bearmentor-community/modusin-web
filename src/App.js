import React, { Component } from "react"
import axios from "axios"

const URL = process.env.REACT_APP_API_URL

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {},
      account: {},
      posts: []
    }
  }

  componentDidMount() {
    axios
      .get(`${URL}/posts`)
      .then((res) => {
        this.setState({
          posts: res.data.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const POSTS = this.state.posts

    return (
      <div>
        <header>
          <h1>Modusin</h1>
        </header>
        <ul>
          {POSTS.map((post) => {
            return (
              <li key={post.id}>
                <span>{post.title}</span>: <span>{post.content}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
