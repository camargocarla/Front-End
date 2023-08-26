// Importar o módulo Express
const express = require('express');

// App
const app = express();

// Rota GET
app.get('/', function(req, res){
    res.write('Utilizando o Express');
    res.end()
});

// Server
app.listen(8080);