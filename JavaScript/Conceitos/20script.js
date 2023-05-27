// JSON
let vetor = [
  {codigo: 1,nome: "Camisa Xadrez", 'valor': "139,90", imagem: "../imagens/feminino/1.jpg", 'categoria':'feminino'},
  {codigo: 2,nome: "Flanela Xadrez",'valor': "119,90", imagem: "../imagens/feminino/2.jpg", 'categoria':'feminino'},
  {codigo: 3, nome: "Regata Social", 'valor': "99,90", imagem: "../imagens/feminino/3.jpg", 'categoria':'feminino'},
  {codigo: 4,nome: "Blusa Bege", 'valor': "109,90", imagem: "../imagens/feminino/4.jpg", 'categoria':'feminino'},
  {codigo: 5, nome: "Blusa Animal Print", 'valor': "89,90", imagem: "../imagens/feminino/5.jpg", 'categoria':'feminino'},
  {codigo: 6, nome: "Blusa Pena", 'valor': "79,90", imagem: "../imagens/feminino/6.jpg", 'categoria':'feminino'},
  {codigo: 7, nome: "Blusa ML Stitch", 'valor': "59,90", imagem: "../imagens/infantil/1.jpg", 'categoria':'infantil'},
  {codigo: 8, nome: "Camiseta Sonic", 'valor': "49,90", imagem: "../imagens/infantil/2.jpg", 'categoria':'infantil'},
  {codigo: 9, nome: "Vestido Xadrez", 'valor': "79,90", imagem: "../imagens/infantil/3.jpg", 'categoria':'infantil'},
  {codigo: 10, nome: "Camiseta Dino", 'valor': "49,90", imagem: "../imagens/infantil/4.jpg", 'categoria':'infantil'},
  {codigo: 11, nome: "Casaco Minnie", 'valor': "89,90", imagem: "../imagens/infantil/5.jpg", 'categoria':'infantil'},
  {codigo: 12, nome: "Vestido Onça", 'valor': "79,90", imagem: "../imagens/infantil/6.jpg", 'categoria':'infantil'},
  {codigo: 13, nome: "Flanela Xadrez", 'valor': "99,90", imagem: "../imagens/masculino/1.jpg", 'categoria':'masculino'},
  {codigo: 14, nome: "Polo ML", 'valor': "109,90", imagem: "../imagens/masculino/2.jpg", 'categoria':'masculino'},
  {codigo: 15, nome: "Camisa MC", 'valor': "99,90", imagem: "../imagens/masculino/3.jpg", 'categoria':'masculino'},
  {codigo: 16, nome: "Camisa Polo", 'valor': "79,90", imagem: "../imagens/masculino/4.jpg", 'categoria':'masculino'},
  {codigo: 17, nome: "Camisa Floral", 'valor': "99,90", imagem: "../imagens/masculino/5.jpg", 'categoria':'masculino'},
  {codigo: 18, nome: "Camisa Social", 'valor': "109,90", imagem: "../imagens/masculino/6.jpg", 'categoria':'masculino'},
];
    // JSON de produtos selecionados
    let carrinho = [

    ]

    // Função para listar os produtos
    let listar = (opcao) => {

    // Obter a DIV produtos
    let produtos = document.getElementById("produtos");

    // Limpar conteúdo da div produtos
    produtos.innerHTML='';

    // Laço de repetição
    for (let i = 0; i < vetor.length; i++) {

        // Condicional
        if(opcao == vetor[i].categoria || opcao =='todos'){
        

    // Criar uma coluna
    let coluna = document.createElement("div");

    // Especificar classes na coluna
    coluna.classList.add("col-3");

    // Criar uma imagem
    let imagem = document.createElement("img");
    imagem.src = vetor[i].imagem;
    imagem.classList.add("img-fluid");

    // Criar o nome do produto
    let nomeProduto = document.createElement("p");
    nomeProduto.innerText = vetor[i].nome;

    // Criar o valor do produto
    let valorProduto = document.createElement("p");
    valorProduto.innerText = vetor[i].valor;

    //  Criar um botão
    let botao = document.createElement("button");
    botao.classList.add("btn", "btn-primary");
    botao.innerText = "Adicionar";
    botao.addEventListener('click', () => {
        adicionar(vetor[i].codigo);
    });

    // Adicionar imagem e parágrafo na coluna
    coluna.appendChild(imagem);
    coluna.appendChild(nomeProduto);
    coluna.appendChild(valorProduto);
    coluna.appendChild(botao);

    // Adicionar coluna na linha
    produtos.appendChild(coluna);
    }
  }
}

// Função para adicionar produtos ao carrinho
let adicionar = (codigo) => {
    
    // Verificar se o código existe no carrinho de compras
    let indice = carrinho.findIndex(obj => {return obj.codigo == codigo});

    // Condicional
    if(indice == -1){
        let obj = {'codigo':codigo, 'quantidade':1}
        carrinho.push(obj);
    }else{
        let obj = carrinho[indice];
        obj.quantidade +=1;
        carrinho[indice] = obj
    }

    // Atualizar produtos selecionados
    itensSelecionados();
}

// Função para listar os produtos do carrinho
let itensSelecionados = () => {

    // Obter o elemento exibirCarrinho
    let exibirCarrinho= document.getElementById('exibirCarrinho');

    // Limpar conteúdos
    exibirCarrinho.innerHTML = '';

    // Laço
    for(let i=0; i<carrinho.length; i++){
        // exibirCarrinho.innerHTML += '<p>'+carrinho[i].codigo+'</p>';
        // exibirCarrinho.innerHTML += '<p>'+carrinho[i].quantidade+'</p>';
        // exibirCarrinho.innerHTML += '<hr>';

        // Obter os dados do produto
        let produto = retornarProduto(carrinho[i].codigo);

        console.log(produto)

        // Criar uma coluna
        let coluna = document.createElement('div');
        coluna.classList.add('col-6');

        // Criar uma imagem
        let imagem = document.createElement('img');
        imagem.src = produto.imagem;
        imagem.classList.add('img-fluid');

        // Nome produto
        let nomeProduto = document.createElement('p');
        nomeProduto.innerText = produto.nome;

        // Valor produto
        let valorProduto = document.createElement('p');
        valorProduto.innerText ='R$'+produto.valor;

        // Quantidade produto
        let quantidadeProduto = document.createElement('p');
        quantidadeProduto.innerText = 'Quantidade: ' + carrinho[i].quantidade;

        // Adicionar elementos na coluna
        coluna.appendChild(imagem);
        coluna.appendChild(nomeProduto);
        coluna.appendChild(valorProduto);
        coluna.appendChild(quantidadeProduto);

        // Adicionar na linha
        exibirCarrinho.appendChild(coluna);
    }

}

// Retornar um objeto do vetor atráves do código do produto
let retornarProduto = codigo => {
    let indice = vetor.findIndex(obj =>{
        return obj.codigo == codigo;
    });

    return vetor[indice];
}

 // Função para pesquisar produtos
 let pesquisar = (opcao) => {

    // Obter o termo pesquisado
    let termo = document.getElementById('termo').value

    // Obter a DIV produtos
    let produtos = document.getElementById("produtos");

    // Limpar conteúdo da div produtos
    produtos.innerHTML='';

    // Laço de repetição
    for (let i = 0; i < vetor.length; i++) {

        // Condicional
        if(vetor[i].nome.toLocaleLowerCase().indexOf(termo.toLocaleLowerCase()) != -1){

    // Criar uma coluna
    let coluna = document.createElement("div");

    // Especificar classes na coluna
    coluna.classList.add("col-3");

    // Criar uma imagem
    let imagem = document.createElement("img");
    imagem.src = vetor[i].imagem;
    imagem.classList.add("img-fluid");

    // Criar o nome do produto
    let nomeProduto = document.createElement("p");
    nomeProduto.innerText = vetor[i].nome;

    // Criar o valor do produto
    let valorProduto = document.createElement("p");
    valorProduto.innerText = vetor[i].valor;

    //  Criar um botão
    let botao = document.createElement("button");
    botao.classList.add("btn", "btn-primary");
    botao.innerText = "Adicionar";
    botao.addEventListener('click', () => {
        adicionar(vetor[i].codigo);
    });

    // Adicionar imagem e parágrafo na coluna
    coluna.appendChild(imagem);
    coluna.appendChild(nomeProduto);
    coluna.appendChild(valorProduto);
    coluna.appendChild(botao);

    // Adicionar coluna na linha
    produtos.appendChild(coluna);
    }
  }
}