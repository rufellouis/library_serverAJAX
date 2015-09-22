// express, ejs, body-parser, method-override,
// mongoose, request, static files
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    request = require('request'),
    db = require('./models');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// post requests (C)

app.post('/books', function(req,res) {
  var newBook = req.body.book;
  db.Book.create(newBook);
  res.redirect(req.get('referer'));
});

// get requests (R)

app.get('/', function(req, res){
  res.render('index');
});

app.get('/searchbooks', function(req, res) {
  var searchQ = req.query['bookSearch'];
  var jsonArray = [];

  request.get("https://www.googleapis.com/books/v1/volumes?q="+encodeURIComponent(searchQ)+"&maxResults=10", function(err, httpRes, body){
    if (err) console.log(err);
    else {
      var jsonBody = JSON.parse(body).items;
      jsonBody.forEach(function(book){
        jsonArray.push(book);
      });
      res.render('ajax', {jsonArray: jsonArray});
    }
  });
});

app.get('/books', function(req, res){
  db.Book.find({}, function(err, book){
    console.log(book);
    res.render('list', {book: book});
  });
});


app.get('/books/:id', function(req, res) {
  db.Book.findById(req.params.id, function(err, book){
    res.render('')
  });
});

app.get('/replace_topic/:id/edit', function(req, res) {

});

// put requests (U)

// app.put('/replace_topic/:id', function(req, res) {

// });

// delete requests (D)

// app.delete('/replace_topic/:id', function(req, res){

// });

// creating localhost

app.listen(3000, function(){
  console.log("localhost ready");
});