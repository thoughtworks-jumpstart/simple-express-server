const express = require('express')
const app = express()

app.use(express.json())

const index = require('./routes/index')
app.use('/', index)

const books = require('./routes/books')
app.use('/books', books)

module.exports = app
