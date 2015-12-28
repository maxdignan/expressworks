var express = require('express');
var app = express();
var path = require('path');

var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2], function(){
  console.log('Listening on: ' + process.argv[2]);
});
