var express = require('express');
var app = express();
var path = require('path');

app.use(require('stylus').middleware(process.argv[3]));

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2], function(){
  console.log('Listening on: ' + process.argv[2]);
});
