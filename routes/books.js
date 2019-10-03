const express = require("express");
const router = express.Router();
const book = require("../models/Book");

router.get("/", (req, res) => {
  if (req.query.author || req.query.title) {
    res.send(book.filterBooks(req.query));
  }

  res.send(book.getAllBooks());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const thisBook = book.getBookById(id);
  res.send(thisBook);
});

router.post("/new", (req, res) => {
  const newBook = req.body;
  book.addBook(newBook);
  res.send(newBook);
});

module.exports = router;
