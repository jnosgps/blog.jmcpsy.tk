// Generated by CoffeeScript 1.12.5
(function() {
  var http, server;

  http = require('http');

  server = http.createServer((function(_this) {
    return function(req, res) {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Hello Vole World!');
      return console.log('createServer(req=' + req + ', res=' + res);
    };
  })(this));

  console.log(server);

  console.log(http);

  console.log('Listening ....');

  server.listen(process.env.PORT);

  console.log('App exit eee');

}).call(this);
