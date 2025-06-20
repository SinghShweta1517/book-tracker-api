const Book = require("../models/Book");

// GET all books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// GET one book
exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
};

// POST create book
exports.createBook = async (req, res) => {
  const newBook = new Book(req.body);
  await newBook.save();
  res.status(201).json(newBook);
};

// PUT update book
exports.updateBook = async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// DELETE book
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};
