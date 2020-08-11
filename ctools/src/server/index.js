const express = require('express')

const app = express()

app.use(express.static('dist'))

app.get('/api/posts', (req, res) => res.json(
  [{id: 0, title: 'zero'}, {id: 1, title: 'one'}, {id: 2, title: 2}]
))

app.listen(1338, () => console.log('Listening on port 1337, API on port 1338!'))
