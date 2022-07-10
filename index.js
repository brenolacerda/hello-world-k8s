const express = require('express')

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', function (req, res) {
  res.send('Hello World')
})

const key = 'xpto'

app.get('/status', function (req, res) {
  res.send(`A chave status do Key Vault é: ${key}`)
})

const server = app.listen(app.get('port'), function () {
  console.log('Listening on port ', server.address().port)
})