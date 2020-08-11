const express = require('express')
const axios = require('axios');
const statistics = require('blockchain.info').statistics
//var statistics = require('blockchain.info/statistics')

const app = express()

app.use(express.static('dist'))
app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type');
  return next();
});

app.get('/api/coinlist', (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/list')
    .then(function (response) {
      console.log(response);
      res.json(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
})

app.get('/api/some-stat', (req, res) => {
  statistics.get()
    .then(data => res.json(data))
})

app.listen(1338, () => console.log('Listening on port 1337, API on port 1338!'))
