const request = require('supertest')
const book = require('../models/Book')
const app = require('../app')

describe('/books', () => {
  it('[GET] /books returns all books', () => {
    return request(app)
      .get('/books')
      .expect(200)
      .expect(book.getAllBooks())
  })

  it('[GET] /books/1 returns book with id 1', () => {
    return request(app)
      .get('/books/1')
      .expect(200)
      .expect({ id: 1, title: 'Introduction to React', author: 'Melvin' })
  })

  it('[POST] /books/new adds a new book', () => {
    const newBook = {id: 456, title: 'My first book', author: 'Bob'}
    
    return request(app)
      .post('/books/new')
      .send(newBook)
      .expect(200)
      .expect({id: 456, title: 'My first book', author: 'Bob'})
  })
})