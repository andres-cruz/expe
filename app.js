// SET UP
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// MODELS
Person = require('./models/person');

// CONFIG
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/expe', { useNewUrlParser: true });

app.get('/', function(req, res){
  res.render('index');
});

app.get('/success', function(req, res){
  res.render('success');
});

app.post('/', function(req, res){
  // VARIABLES FROM FORM
  var name = req.body.name;
  var surname = req.body.surname;
  // CREATE OBJECT
  var newPerson = {
    name: name,
    surname: surname
  };
   Person.create(newPerson, function(err, newlyCreated){
     if(err){
       console.log(err);
     } else {
       res.redirect('/success');
     }
   });
});

app.listen(3000);
