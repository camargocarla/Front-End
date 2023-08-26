// Importar dependências
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');


// App
const app = express();

//  Referencia a dependeica CORS
app.use(cors());

// Configurar o body-parser (transitar dados entre rotas)
app.use(express.json());

// Lista de usuários
let usuarios = [
    {'nome':'Ralf', 'senha':'123'},
    {'nome':'Larissa', 'senha':'456'},
    {'nome':'Jaison', 'senha':'abc'},
]

// Rotas 
app.get('/', function (req, res) {
    res.end('Hello World!');
});

app.post('/login', function (req, res) {
    //res.status(200).json({'mensagem':'funcionou'});

    // Extrair nome e senha da requisição
    let nome = req.body.nome;
    let senha = req.body.senha;

    // Variavel de validação de usuário
    let existe = false;

    // Indice
    let i = 0;

    // Laço de repetição
    for(i = 0; i<usuarios.length; i++){
        if(usuarios[i].nome === nome && usuarios[i].senha ===senha){
            existe = true;
            break;
        }
    }

    //  Criar token
    if(existe){
    // let token = jwt.sign({ 'nome': 'Carla' }, 'apex', {expiresIn:'10s'});
    let token = jwt.sign({ 'nome':usuarios[i].nome}, 'apex', {expiresIn:'20s'});

    // Retorno
    res.status(200).json({ 'token': token });
    }else{
        res.status(404).json({'mensagem':'Nome ou senha incorretos.'});
    }
});

app.get('/login', function (req, res) {
    //res.end(req.params.token);

    try {

        // Obter token via cabeçalho (Bearer)
        let token = req.headers.authorization.split(' ')[1];

        // Obter o token
        // let token = req.params.token;

        // Verificar se o token é válido
        let obj = jwt.verify(token, 'apex');

        // Gerar novo token
        let novoToken = jwt.sign({obj}, 'apex', {expiresIn:'20s'})

        // Retorno
        res.status(200).json({ 'token': novoToken });

    } catch (erro) {
        res.status(400).json({ 'mensagem': erro });
    }
});


// Servidor
app.listen(8080);