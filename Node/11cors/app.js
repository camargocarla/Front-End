// Express
const express = require('express');

// Cors
const cors = require('cors');

// APP
const app = express();

// Especificar o uso do CORS na API
app.use(cors());

// Rota
app.get('/', function(req,res){
    res.json({'nome':'Carla'})
});

// Servidor
app.listen(8080);