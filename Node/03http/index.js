// Módulo http
const http = require('http');

// Criar um servidor
http.createServer(function(req, res){
    res.write('Aprendendo Nodemon');
    res.end();
}).listen(8080);