var http  = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
     if(req.method === 'POST' && req.url === '/'){
         
     }
}