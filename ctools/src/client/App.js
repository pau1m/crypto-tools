import React, { Component } from 'react'
import './app.css'
//import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import BtcStatistics from './components/BtcStatistics'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coinList: [
        // {
        //   id: 0,
        //   name: '',
        //   symbol: ''
        // }
        ],
    }
  }

  componentDidMount() {
    fetch('http://localhost:1338/api/coinlist')
      .then(res => res.json())
      .then(coinList => this.setState({
        coinList: coinList
      }))
      .catch(e => console.log)
  }

  render() {

    const listItems = this.state.coinList.map( (item) => <li key={item.id}>id: {item.id} symbol: {item.symbol} name: {item.name}</li>)

    return (
      <>
        <h1>Crypto Tools</h1>
        <h2>A thing</h2>
        <BtcStatistics />

        <h2>Token List</h2>
          <ul>
            { listItems }
          </ul>
      </>
    )
  }
}
