require('dotenv').config()
const express = require('express')
const { OpenAI } = require('openai')
const app = express()
app.use(express.json())

const OPENAI_API_KEY = process.env.OPENAI_API_KEY

//POST (criar recurso no servidor)
//GET (obter recurso já existente no servidor)

// GET /hello
app.get("/hello", (req, res) => {
  console.log('Passou por aqui')
  res.json({
    mensagem: "Hello, World com endpoints"
  })
})

//POST /pergunte-ao-chatgpt
app.post('/pergunte-ao-chatgpt', (req, res) => {
  const openai = new OpenAI(OPENAI_API_KEY)
  const prompt = req.body.prompt
  //operador de desestruturação
  // const { prompt } = req.body

})

app.listen(3000, () => console.log('Servidor ok'))