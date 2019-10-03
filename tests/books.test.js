const request = require("supertest");
const book = require("../models/Book");
const app = require("../app");

jest.mock("../models/Book");

const mockData = [
  {id: 1, title: "Introduction to React", author: "Melvin"},
  {id: 2, title: "The art of debugging while baking", author: "Yun"},
  {id: 3, title: "How to be an awesome developer", author: "Syafi"},
  {
    id: 4,
    title: "How I became a developer while traveling in Japan",
    author: "Ashley"
  }
];

describe("/books", () => {
  it("[GET] /books returns all books", () => {
    book.getAll.mockReturnValueOnce(mockData);

    return request(app)
      .get("/books")
      .expect(200)
      .expect([
        {id: 1, title: "Introduction to React", author: "Melvin"},
        {id: 2, title: "The art of debugging while baking", author: "Yun"},
        {id: 3, title: "How to be an awesome developer", author: "Syafi"},
        {
          id: 4,
          title: "How I became a developer while traveling in Japan",
          author: "Ashley"
        }
      ]);
  });

  it("[GET] /books/1 returns book with id 1", () => {
    book.getById.mockReturnValueOnce(mockData[0]);

    return request(app)
      .get("/books/1")
      .expect(200)
      .expect({id: 1, title: "Introduction to React", author: "Melvin"});
  });

  it("[POST] /books/new adds a new book", () => {
    const newBook = {id: 456, title: "My first book", author: "Bob"};

    return request(app)
      .post("/books/new")
      .send(newBook)
      .expect(200)
      .expect({id: 456, title: "My first book", author: "Bob"})
      .expect(() => {
        expect(book.add).toHaveBeenCalledTimes(1);
      });
  });

  it("[GET] /books?author=Melvin", () => {
    book.filter.mockReturnValueOnce([mockData[0]]);

    return request(app)
      .get("/books")
      .query({author: "Melvin"})
      .expect(200)
      .expect([{id: 1, title: "Introduction to React", author: "Melvin"}]);
  });

  it("[GET] /books?author=author that does not exist", () => {
    book.filter.mockReturnValueOnce([]);

    return request(app)
      .get("/books")
      .query({author: "author that does not exist"})
      .expect(200)
      .expect([]);
  });

  it("[GET] /books?title=developer", () => {
    book.filter.mockReturnValueOnce([mockData[2]]);

    return request(app)
      .get("/books")
      .query({title: "developer"})
      .expect(200)
      .expect([
        {id: 3, title: "How to be an awesome developer", author: "Syafi"}
      ]);
  });

  it("[GET] /books?author=bob&title=developer", () => {
    book.filter.mockReturnValueOnce([mockData[3]]);

    return request(app)
      .get("/books")
      .query({author: "Ashley", title: "developer"})
      .expect(200)
      .expect([
        {
          id: 4,
          title: "How I became a developer while traveling in Japan",
          author: "Ashley"
        }
      ]);
  });
});
