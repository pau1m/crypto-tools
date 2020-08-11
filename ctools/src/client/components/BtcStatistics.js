import React, { Component } from 'react'

export default class BtcStatistics extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentDataPoints: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:1338/api/some-stat')
      .then(res => res.json())
      .then(dataPoints => this.setState({
        currentDataPoints: dataPoints
      }))
      .catch(e => console.log)
  }

  render() {
    return <><p>Miners Revenue: {this.state.currentDataPoints['miners_revenue_btc']}</p></>
  }
}
