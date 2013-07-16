var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

var file = fs.openSync("./index.html", 'r');

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
