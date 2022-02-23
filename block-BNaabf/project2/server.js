
var http = require('http');
var fs = require('fs');
var qs = require('qs')

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    var store = '';
    req.on('data', (chunk)=>{
        store += chunk;
    })
    req.on('end',()=>{
        if(req.method === 'GET' && req.url === '/form'){
        res.setHeader('Content-Type',"text/html");
        fs.createReadStream('./form.html').pipe(res);
    }   
        if(req.method === 'POST' && req.url === "/form"){
        var parsedData = qs.parse(store);
        res.setHeader('content-Type','text/html');
        res.write(`<h2>${parsedData.name}</h2>`);
        res.write(`<h3>${parsedData.age}</h3>`);
        res.end();
    }
    })

  
}

server.listen(5678,()=>{
    console.log('listening on port 5678')
})