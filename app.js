var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.use(express.static('app'))

app.listen(8080);