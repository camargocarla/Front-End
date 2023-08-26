const express = require('express');
const app = express();

app.use(express.json());

const produtos = [];
let codigo = 1;

app.post('/produtos', (req, res) => {
    const novoProduto = {
        codigo: codigo,
        nome: req.body.nome,
        marca: req.body.marca,
        valor: req.body.valor,
    };

    produtos.push(novoProduto);

    codigo += 1;
    res.json({ message: 'Produto cadastrado com sucesso!' });
});

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:codigo', (req, res) => {
    const { codigo } = req.params;

    const produto = produtos.find((p) => p.codigo == codigo);

    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    return res.json(produto);
});

app.get('/produtos/nome/:substring', (req, res) => {
    const { substring } = req.params;

    const produtosFiltrados = produtos.filter((p) =>
        p.nome.toLowerCase().includes(substring.toLowerCase())
    );

    if (produtosFiltrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum produto encontrado.' });
    }

    return res.json(produtosFiltrados);
});

app.get('/produtos/precoMinimo=:min&precoMaximo=:max', (req, res) => {
    const { min, max } = req.params;

    const produtosFiltrados = produtos.filter(
        (p) => p.valor >= min && p.valor <= max
    );

    if (produtosFiltrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum produto encontrado.' });
    }

    return res.json(produtosFiltrados);
});

app.put('/produtos/:codigo', (req, res) => {
    const { codigo } = req.params;
    const { nome, marca, valor } = req.body;

    const produto = produtos.find((p) => p.codigo == codigo);

    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    produto.nome = nome;
    produto.marca = marca;
    produto.valor = valor;

    return res.json(produto);
});

app.delete('/produtos/:codigo', (req, res) => {
    const { codigo } = req.params;

    const index = produtos.findIndex((p) => p.codigo == codigo);

    if (index === -1) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    produtos.splice(index, 1);

    return res.json({ message: 'Produto removido com sucesso!' });
});

app.get('/produtos/quantidade', (req, res) => {
    const quantidade = produtos.length;

    return res.json({ quantidade: quantidade });
});

app.listen(8080);
