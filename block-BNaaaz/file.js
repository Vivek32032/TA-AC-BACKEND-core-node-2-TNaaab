var http = require('http');
var fs = require('fs');

let server = http.createServer(handleRequest);

function handleRequest(req,res){

    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-Type','text/plain');
        fs.createReadStream('./readme.txt').pipe(res);
        
    }
}

server.listen(3000, () => {
    console.log('server listening on port  3k')
})