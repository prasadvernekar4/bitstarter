var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('I am in IBMer! \n just another brick in the wall \n \t \t- Pink Floyd');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
