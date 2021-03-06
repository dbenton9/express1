// JEFF's Code

// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = [7000, 7500];

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT[0], function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT[0]);
    console.log('You are cool!');
});

server.listen(PORT[1], function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT[1]);
    console.log('Bastard!');
});