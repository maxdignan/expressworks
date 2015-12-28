var express = require('express');
var app = express();

app.get('/home', function(req, res){
  res.send('Hello World!');
});

app.listen(process.argv[2], function(){
  console.log('Listening on: ' + process.argv[2]);
});
