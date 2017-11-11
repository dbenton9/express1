var http = require('http');

var PORT = 8080;

function handleRequest(request, response) { // request server information

    response.end('this server works' + request);
};

var server = http.createServer(handleRequest); // create server

server.listen(PORT, function() { // server is actively working (listeing)

    console.log('Server listening on http://localhost:' + PORT);

});