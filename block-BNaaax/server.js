var path = require('path')
var absolutePath = __dirname;
var relativePath = "./server.js"

var serverPath = path.join(__dirname,'server.js')

console.log(relativePath);
console.log(__dirname);
console.log(__dirname + '/server.js');
console.log(serverPath );