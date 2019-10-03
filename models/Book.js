class Book {
  constructor() {
    this.books = [
      {id: 1, title: "Introduction to React", author: "Melvin"},
      {id: 2, title: "The art of debugging while baking", author: "Yun"},
      {id: 3, title: "How to be an awesome developer", author: "Syafi"},
      {id: 4, title: "How to build a weather app", author: "Carl"},
      {
        id: 5,
        title: "Learning React while traveling in Japan",
        author: "Ashley"
      },
      {
        id: 6,
        title: "Make your first million by playing poker",
        author: "Lishan"
      },
      {id: 7, title: "Pancakes for everyone", author: "Yun"}
    ];
  }

  getAllBooks() {
    return this.books;
  }

  getBookById(id) {
    return this.books.find(b => b.id === id);
  }

  addBook(book) {
    this.books.push(book);
  }

  filterBooks(queries) {
    const keys = Object.keys(queries);

    return this.books.filter(book => {
      return keys.every(key => {
        return book[key].includes(queries[key]);
      });
    });
  }
}

module.exports = new Book();
