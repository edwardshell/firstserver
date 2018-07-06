var http = require("http");

var PORT = 7000;

function handleRequest(request, response) {
    
    response.end("You is kind, you is smart, and you is important" + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
})
