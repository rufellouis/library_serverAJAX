// express, ejs, body-parser, method-override,
// mongoose, request, static files
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    request = require('request');
    // db = require('./models');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// post requests (C)

// app.post('/replace_topic', function(req,res) {

// });

// get requests (R)

app.get('/', function(req, res){
  res.render('index');
});

// app.get('/replace_topic', function(req, res){

// });

// app.get('/replace_topic/new', function(req, res) {

// });

// app.get('/replace_topic/:id', function(req, res) {

// });

// app.get('/replace_topic/:id/edit', function(req, res) {

// });

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