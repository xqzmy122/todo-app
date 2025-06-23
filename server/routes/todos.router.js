const todo = require('../models/todo.model')
const express = require('express')
const todosRouter = express.Router()

todosRouter.get('/', async (req, res) => {
  const todos = await todo.find({})
  res.status(200).json(todos)
})

todosRouter.post('/', async (req, res) => {
  try {
    const newTodo = await todo.create(req.body)
    console.log(`new todo ${newTodo}`);
    res.status(200).json(newTodo)
  } catch (error) {
    console.log(error.message);
  }
  
})

todosRouter.delete('/:id', async (req, res) => {
  try {
    console.log(req.params);
    const {id} = req.params
    const todoToDelete = await todo.findByIdAndDelete(id)
    res.status(200).json(todoToDelete)
  } catch (error) {
    res.status(500).json(error.message)
  }
})

module.exports = todosRouter