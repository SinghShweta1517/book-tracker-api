const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  rating: Number,
  review: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", BookSchema);
