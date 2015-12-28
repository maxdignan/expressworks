var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

//from docs http://expressjs.com/en/api.html#req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, buffer){
    var string = buffer.toString();
    res.send(JSON.parse(string));
  });
});

app.listen(process.argv[2], function(){
  console.log('Listening on: ' + process.argv[2]);
});
