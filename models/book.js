var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
  thumbnail: String,
  title: String,
  year: String,
  author: String,
  price: Number || String
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;