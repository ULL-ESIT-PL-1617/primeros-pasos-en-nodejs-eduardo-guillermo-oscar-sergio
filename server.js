var express = require('express')
var app = express()
var path = require('path');

app.use(express.static('gh-pages'));

var server = app.listen(80, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Server listening at http://%s:%s', host, port)
})

