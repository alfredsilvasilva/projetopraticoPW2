
const express = require('express')

const app = express()
const port = 3000

app.use(express.json())

app.use(express.urlencoded({extended:true}))


const clienteController = require('./controller/clienteController')
app.use('/',clienteController)


app.listen(port, () => {
  console.log(`Servidor Rodando na porta ${port}`)
})