var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

var mystring = fs.readFileSync("./index.html", encoding);

app.get('/', function(request, response) {
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
