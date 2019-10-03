const express = require("express");
const router = express.Router();
const book = require("../models/Book");

router.get("/", (req, res) => {
  if (req.query.author || req.query.title) {
    res.send(book.filter(req.query));
  }

  res.send(book.getAll());
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const thisBook = book.getById(id);
  res.send(thisBook);
});

router.post("/new", (req, res) => {
  const newBook = req.body;
  book.add(newBook);
  res.send(newBook);
});

module.exports = router;
