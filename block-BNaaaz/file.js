var http = require('http');
var fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req,res){

    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-Type','text/html');
        fs.createReadStream('./readme.txt').pipe(res);
        
    }
}