const request = require('supertest')
const app = require('./app')

describe('My first Express server', () => {
  it('GET / should returns correct message', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Thank you for visiting the server')
  })
})
