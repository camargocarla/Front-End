// Importar o módulo Express
const express = require('express');

// Importar o módulo express-handlebars
const { engine } = require('express-handlebars');

//  Importar o módulo path (responsável por gerenciar diretórios)
const path = require('path');

// Importar o módulo MySQL
const mysql = require('mysql2');

// Efetuar a conexão
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'laranjauva',
    database: 'aluno'
});
// Criar um objeto pra ter acesso as funcionalidades
const app = express();

// Referencias de diretórios (path)
app.use('/bootstrap_css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Configurar o body-parser (transitar dados entre rotas)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configurações do handlebars;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');




app.get('/', function (req, res) {

    let sql = 'SELECT * FROM aluno';
    conexao.query(sql, function (erro, retorno) {

        res.render('principal', { 'alunos': retorno })
    })

});

app.post('/cadastrar', function (req, res) {

    let media = (parseFloat(req.body.nota1) + parseFloat(req.body.nota2)) / 2;

    let sql = `INSERT INTO aluno (nome, nota1, nota2, media) VALUES('${req.body.nome}', ${req.body.nota1}, ${req.body.nota2}, ${media})`;

    conexao.query(sql, function (erro, retorno) {

        // Condicional
        if (erro) {
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    })
});

app.get('/remover/:codigo', function (req, res) {

    // SQL
    let sql = `DELETE FROM aluno where codigo = ${req.params.codigo}`;

    // Executar o comado SQL
    conexao.query(sql, function (erro, retorno) {

        // Condicional
        if (erro) {
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    });

});
// Servidor
app.listen(8080);