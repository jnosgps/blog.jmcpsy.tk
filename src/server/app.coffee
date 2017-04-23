http = require 'http'
server = http.createServer (req, res) =>
    res.writeHead 200, {'Content-Type':'text/plain'}
    res.end 'Hello Vole World!'

console.log 'Listening ....'
server.listen process.env.PORT