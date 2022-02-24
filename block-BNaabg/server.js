var http = require('http');
var fs = require('fs');

var url = require('url');

var server = http.createServer(handleRequest);

var userPath = __dirname + '/users/'

function handleRequest(req, res) {
    var parsedUrl = url.parse(req.url, true);
    var store = ''; 
    req.on('data', (chunk) => {
        store += chunk;
    });
    req.on('end', () => {
        if (req.url === '/users' && req.method === 'POST') {
            var username = JSON.parse(store).username;
            fs.open(userPath + username + '.json', 'wx' , (err,fd)=>{
                if(err) return console.log(err);
                fs.writeFile(fd, store , (err) => {
                    if(err) return console.log(err);
                    fs.close(fd,()=>{
                       return res.end(`${username} created successfully`)//send a response back to the client 
                    })
                })
            })
        }
        if(parsedUrl.pathname === '/users' && req.method === 'GET'){
            var username = parsedUrl.query.username;
            console.log(username)
            fs.readFile(userPath + username + '.json',(err,content) => {
                if(err) return console.log(err)
                res.setHeader('Content-Type','application/json');
                return res.end(content);
            })
        }

        if(parsedUrl.pathname === '/users' && req.method === "PUT"){
            var username = parsedUrl.query.username;
            fs.open(userPath + username + '.json', 'r+',(err,fd) => {
                if(err) return console.log(err);
                 fs.ftruncate(fd,(err) => {       //truncate removes previous content 
                                                  // ftruncate takes fd as an argument in the path.
                     if(err) return console.log(err);
                     fs.writeFile(fd,store,(err) => {   //fd file descriptor
                         if(err) return console.log(err);
                         fs.close(fd,()=>{
                            return res.end(`${username} updated successfully`);
                         })
                     })
                 })
            })
        }
        if(parsedUrl.pathname === '/users' && req.method === "DELETE"){
           var username = parsedUrl.query.username;
           fs.unlink(userPath + username + '.json' , (err)=>{
               if(err) return console.log(err);
               return res.end(`${username} is deleted`);
           } )
        }

        res.statusCode = 404;
        res.end('page not Found')
    })
}

server.listen(5800,()=>{
    console.log('server listening of 5800')
})