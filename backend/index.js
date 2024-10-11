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
app.post('/pergunte-ao-chatgpt', async (req, res) => {
  const openai = new OpenAI(OPENAI_API_KEY)
  //operador de desestruturação
  // const { prompt } = req.body
  const prompt = req.body.prompt
  const model = 'gpt-4o-mini'
  const role = 'user'
  const max_tokens = 50
  const completion = await openai.chat.completions.create({
    messages: [{role: role, content: prompt}],
    model: model,
    max_tokens: max_tokens
  })

  res.json({completion: completion.choices[0].message.content})
})

app.listen(3000, () => console.log('Servidor ok'))