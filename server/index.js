var express = require('express');
var bodyParser = require('body-parser');
var router=require('./routes')
var Users = require('../database-mongo');
var session=require('express-session')
var app = express();


app.use(session({
  secret: '159753d',
  resave: true,
  saveUninitialized: false
}))
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/',router);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
