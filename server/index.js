const express = require('express')
const todos = require('./data/todos')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.get('/todos', (req, res) => {
  res.send(todos)
})

app.post('/todos', (req, res) => {
  todos.push(req.body)
  res.send('200')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})