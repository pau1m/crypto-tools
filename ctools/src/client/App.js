import React, { Component } from 'react'
import './app.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        // {
        //   id: 0,
        //   title: 'none'
        // }
        ],
    }
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    fetch('http://localhost:1338/posts')
      .then(res => res.json())
      .then(posts => this.setState({
        posts: posts
      }))
  }

  render() {

    const listItems = this.state.posts.map( (item) => <li>{item.title}</li>)

    return (
      <>
        {this.state.posts[0] ? (
          <ol>
            { listItems }
          </ol>
        ) : (
          <h1>Loading</h1>
        )}
      </>
    )
  }
}
