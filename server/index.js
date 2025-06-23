const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todosRouter = require('./routes/todos.router.js')
const app = express()
const PORT = 3000

mongoose.connect('mongodb://127.0.0.1:27017/Todo_DB')
.then((result) => {
  console.log('Connected to db');
}).catch((err) => {
  console.log('Failed to connect to db');
  console.log(err.message);
});

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/todos', todosRouter)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})