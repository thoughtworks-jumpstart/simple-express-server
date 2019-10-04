const book = require("../models/Book");

describe("Book", () => {
  beforeEach(() => {
    book.books = [
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"}
    ];
  });

  it("get a list of books when getAllBooks() is called", () => {
    expect(book.getAll()).toEqual([
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });

  it("gets a book by id when getBookById() is called", () => {
    expect(book.getById(456)).toEqual({
      id: 456,
      title: "Second book",
      author: "Bob"
    });
  });

  it("adds a book when addBook() is called", () => {
    const newBook = {id: 789, title: "Third book", author: "Clara"};
    book.add(newBook);

    expect(book.getAll()).toEqual([
      {id: 123, title: "First book", author: "Alice"},
      {id: 456, title: "Second book", author: "Bob"},
      {id: 789, title: "Third book", author: "Clara"}
    ]);
  });

  it("gets correct filtered results regardless of case sensitivity", () => {
    expect(book.filter({author: "alice"})).toEqual([
      {id: 123, title: "First book", author: "Alice"}
    ]);
  });

  it("gets filtered list of books by author when filterBooks() is called", () => {
    expect(book.filter({author: "Alice"})).toEqual([
      {id: 123, title: "First book", author: "Alice"}
    ]);
  });

  it("gets filtered list of books by title when filterBooks() is called", () => {
    expect(book.filter({title: "Second"})).toEqual([
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });

  it("gets filtered list of books by title when filterBooks() is called", () => {
    const query = {author: "Bob", title: "book"};
    expect(book.filter(query)).toEqual([
      {id: 456, title: "Second book", author: "Bob"}
    ]);
  });

  it("updates book with updated book details", () => {
    const updateBook = {
      id: 123,
      title: "Updated book title",
      author: "New author"
    };
    book.update(123, updateBook);
    expect(book.getById(123)).toEqual({
      id: 123,
      title: "Updated book title",
      author: "New author"
    });
  });

  it("does not update book when no book is found", () => {
    expect(() => book.update(987, {})).toThrow();
  });
});
