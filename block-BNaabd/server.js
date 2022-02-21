
var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest (req,res){
    var store = '';
    req.on('data',(chunk) =>{
        store = store + chunk;
    })
    req.on('end',()=>{
        if(dateFormat === 'application/JSON'){
            var parseDate = JSON.parse(store);
            res.end(store);
        }
    })

}

server.listen(7000,()=>{
    console.log('running on server 7k');
})