class Book {
  constructor() {
    this.books = [
      { id: 1, title: 'Introduction to React', author: 'Melvin' },
      { id: 2, title: 'The art of debugging while baking', author: 'Yun' },
      { id: 3, title: 'How to be an awesome developer', author: 'Syafi' },
      { id: 4, title: 'How to build a weather app', author: 'Carl' },
      { id: 5, title: 'Learning React while traveling in Japan', author: 'Ashley' },
      { id: 6, title: 'Make your first million by playing poker', author: 'Lishan' }
    ]
  }

  getAllBooks() {
    return this.books
  }

  getBookById(id) {
    return this.books.find(b => b.id === id)
  }
}

module.exports = new Book()