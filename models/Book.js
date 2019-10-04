const books = [
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

class Book {
  constructor() {
    this.books = books;
  }

  getAll() {
    return this.books;
  }

  getById(id) {
    return this.books.find(b => b.id === id);
  }

  add(book) {
    this.books.push(book);
  }

  filter(queries) {
    const keys = Object.keys(queries);

    return this.books.filter(book => {
      return keys.every(key => {
        const regex = new RegExp(queries[key], "gi");
        return book[key].match(regex);
      });
    });
  }

  update(id, updatedBook) {
    const index = this.books.findIndex(book => {
      return book.id === id;
    });

    if (index === -1) {
      throw new Error("Book does not exist, pal!");
    }

    this.books[index] = updatedBook;
  }
}

module.exports = new Book();
