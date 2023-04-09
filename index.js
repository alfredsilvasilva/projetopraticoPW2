
const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Seja Bem vindo a Block Buster')
})

app.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`)
})