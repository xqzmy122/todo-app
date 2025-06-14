const express = require('express')
const todos = require('./data/todos')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())

app.get('/todos', (req, res) => {
  res.send(todos)
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})