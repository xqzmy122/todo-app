const express = require('express')
const mongoose = require('mongoose')
// const todos = require('./data/todos')
const todo = require('./models/todo.model.js')
const cors = require('cors')
const app = express()
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/Todo_DB')
.then((result) => {
  console.log('Connected to db');
}).catch((err) => {
  console.log('Failed to connect to db');
  console.log(err.message);
});

app.use(cors())
app.use(express.json())

// app.get('/todos', (req, res) => {
//   res.send(todos)
// })

app.get('/todos', async (req, res) => {
  const todos = await todo.find({})
  res.status(200).json(todos)
})


app.post('/todo', async (req, res) => {
  try {
    const newTodo = await todo.create(req.body)
    // todos.push(req.body)
    res.send(200).json(newTodo)
  } catch (error) {
    console.log(error.message);
  }
  
})

app.delete('/todo/:id', async (req, res) => {
  try {
    console.log(req.params);
    const {id} = req.params
    const todoToDelete = await todo.findByIdAndDelete(id)
    res.status(200).json(todoToDelete)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})