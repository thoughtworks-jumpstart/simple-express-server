const book = require("../models/Book");

describe("Book", () => {
  beforeEach(() => {
    book.books = [
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"}
    ];
  });

  it("get a list of books when getAllBooks() is called", () => {
    expect(book.getAllBooks()).toEqual([
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });

  it("gets a book by id when getBookById() is called", () => {
    expect(book.getBookById(456)).toEqual({
      id: 456,
      title: "Second book",
      author: "Bob"
    });
  });

  it("adds a book when addBook() is called", () => {
    const newBook = {id: 789, title: "Third book", author: "Clara"};
    book.addBook(newBook);

    expect(book.getAllBooks()).toEqual([
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"},
      {id: 789, title: "Third book", author: "Clara"}
    ]);
  });

  it("gets filtered list of books by author when filterBooks() is called", () => {
    expect(book.filterBooks({author: "Alice"})).toEqual([
      {id: 123, title: "First book", author: "Alice"}
    ]);
  });

  it("gets filtered list of books by title when filterBooks() is called", () => {
    expect(book.filterBooks({title: "Second"})).toEqual([
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });

  it("gets filtered list of books by title when filterBooks() is called", () => {
    const query = {author: "Bob", title: "book"};
    expect(book.filterBooks(query)).toEqual([
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });
});
