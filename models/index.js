var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/library_serverajax");

module.exports.Book = require("./book");