
// var path = require('path');

// console.log(__filename);

// console.log(__dirname + '/app.js')

// console.log('./index.html');

// var indexPath = path.join(__dirname , 'index.html');





// 2 question


var http  = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
     if(req.method === 'POST' && req.url === '/'){
        var store = ''; 
        req.on('data', (chunk) => {
             store += chunk;
         }).on('end',()=>{
            res.statusCode = 201;
            res.end(store)
         })
     }
}

server.listen(3000, ()=>{
    console.log('server listening on port 3k')
})


// 3 question

var http  = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
     if(req.method === 'POST' && req.url === '/'){
        var store = ''; 
        req.on('data', (chunk) => {
             store += chunk;      //for form data is in url encoded so we need to parse them to make an object.
         }).on('end',()=>{
            res.statusCode = 201;
            var parsedData = qs.parse(store); // parsedData  is an object
            res.end(JSON.stringify(parsedData));
         })
     }
}

server.listen(3300, ()=>{
    console.log('server listening on port 3k')
})




// 4 question 

var http = require('http')
var qs = require('querystring');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
     var store = '';
     req.on('data',(chunk) =>{
         store += chunk;

     })
     req.on('end',()=>{
         if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
             var formData = qs.parse(store);
             res.end(JSON.stringify(formData));
         }

         if(req.headers['content-type']=== 'application/json'){
             res.end(store);
         }

     })
}

server.listen(9900,()=>{

})


// 5 question 

var http = require('http')
var qs = require('querystring');

var server = http.createServer(handleRequest);

function handleRequest(req,res){
     var store = '';
     req.on('data',(chunk) =>{
         store += chunk;

     })
     req.on('end',()=>{
         if(req.headers['content-type'] === 'application/x-www-form-urlencoded'){
             var formData = qs.parse(store);
             res.setHeader('Content-Type', 'text/html');
             res.end(`<h2>${formData.name}</h2><p>${formData.email}</p>`);
         }

         if(req.headers['content-type']=== 'application/json'){
             var jsonData =JSON.parse(store);
             res.setHeader('Content-Type','text/html');
             res.end(`<h2>${jsonData.name}</h2><p>${jsonData.email}</p>`)
         }

     })
}

server.listen(9000,()=>{
    console.log('listening on 9k')
})
