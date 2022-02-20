
var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.setHeader

}

server.listen(3456, () => {
    console.log("Your Server is up and Running On port 3456");
  });