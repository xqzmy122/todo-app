const express = require('express')
const mongoose = require('mongoose')
const todos = require('./data/todos')
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

// const todoSchema = new mongoose.Schema({
//   id: {type: String},
//   todoText: {type: String},
//   isDone: {type: Boolean, default: false},
//   priority: {type: String},
//   tag: {type: String}
// })

// const todo = mongoose.model('Todo', todoSchema)
// const todo1 = new todo({
//   id: 'qweDSq-e42c',
//   todoText: 'Выгулять собаку',
//   priority: 'High',
//   tag: 'Work'
// })

// todo1.save()

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