// require and import HTTP module
var http = require("http");

// define a port to listen for incoming requests > 1000
var PORT = 7500; 

// Create a generic function to handle requests and responses
function handleRequest(request, response) {

    response.end("You need a tic tac or something cuz yo breath STINKS!" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("Server listening on http://localhost:" + PORT);
})