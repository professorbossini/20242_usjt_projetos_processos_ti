const express = require('express')
const app = express()
app.use(express.json())

//POST (criar recurso no servidor)
//GET (obter recurso já existente no servidor)

// GET /hello
app.get("/hello", (req, res) => {
  console.log('Passou por aqui')
  res.json({
    mensagem: "Hello, World com endpoints"
  })
})

app.listen(3000, () => console.log('Servidor ok'))