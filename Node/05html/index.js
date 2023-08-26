// Importar o módulo Express
const express = require('express');

// APP
const app = express();

// Arquivos complementares - CSS
app.use(express.static(__dirname + '/css'));

// Arquivos complemntares - IMAGENS
app.use(express.static(__dirname + '/imagens'));

// Rota
app.get('/', function(req, res){
    res.sendFile(__dirname + '/pagina.html');
});

// Servidor
app.listen(8080);