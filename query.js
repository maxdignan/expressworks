var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//from docs http://expressjs.com/en/api.html#req
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search', function(req, res){
  res.send(req.query);
});

app.listen(process.argv[2], function(){
  console.log('Listening on: ' + process.argv[2]);
});
