const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  id: {type: String, require: true},
  todoText: {type: String, require: true},
  isDone: {type: Boolean, default: false},
  priority: {type: String, require: true},
  tag: {type: String, require: true}
})

const todo = mongoose.model('Todo', todoSchema)
module.exports = todo