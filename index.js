// index.js

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from simple Node.js server!\n');
});

var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Server running on port ' + port);
});

