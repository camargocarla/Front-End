// Função para cadastrar um usuário
function cadastrar() {
  let users = []; // Inicializa o array 'users'

  // Obtém os valores dos campos do formulário
  let nome = document.getElementById('nome');
  let cpf = document.getElementById('cpf');
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');
  let senha = document.getElementById('senha');

  // Verifica se há algum dado já armazenado no localStorage
  if (localStorage.getItem('vetor') !== null) {
    users = JSON.parse(localStorage.getItem('vetor')); // Recupera os usuários armazenados
  }

  // Validação dos campos do formulário
  if (nome.value.length < 3) {
    alert('Digite seu nome');
  } else if (cpf.value.length < 11) {
    alert('Digite um CPF válido');
  } else if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    alert('Digite um e-mail válido');
  } else if (telefone.value.length < 9) {
    alert('Digite um número de telefone válido');
  } else if (senha.value.length < 5) {
    alert('Digite uma senha com pelo menos 5 caracteres');
  } else {
    // Verifica se o email já está cadastrado
    if (isEmailAlreadyRegistered(users, email.value)) {
      alert('Este e-mail já está cadastrado');
      return;
    }

    // Exibe os dados cadastrados no console (pode ser removido)
    console.log(nome.value);
    console.log(cpf.value);
    console.log(email.value);
    console.log(telefone.value);
    console.log(senha.value);

    // Adiciona um novo usuário ao array 'users'
    users.push({
      'nome': nome.value,
      'cpf': cpf.value,
      'email': email.value,
      'senha': senha.value,
      'telefone': telefone.value,
    });

    // Armazena o array atualizado no localStorage
    localStorage.setItem('vetor', JSON.stringify(users));

    alert('Cadastro feito com sucesso');
  }
}

// Função auxiliar para verificar se um email já está cadastrado
function isEmailAlreadyRegistered(users, email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return true;
    }
  }
  return false;
}

// Função para realizar o login
function entrar() {
  let email_login = document.getElementById('email-login');
  let senha_login = document.getElementById('senha-login');

  let dadosLocalStorage = localStorage.getItem('vetor');
  let vetor = JSON.parse(dadosLocalStorage);

  // Verifica se há dados cadastrados no localStorage
  if (dadosLocalStorage == null) {
    alert('Nenhum dado encontrado. Por favor, crie uma conta!');
  } else {
    // Percorre o vetor de usuários para verificar o login
    for (let index = 0; index < vetor.length; index++) {
      if (email_login.value == vetor[index].email && senha_login.value == vetor[index].senha) {
        alert('Login efetuado com sucesso!');
        window.location.assign('/page/paginainicial.html'); // Redireciona para a página inicial
        return true;
      } else {
        alert('Digite um email e senha válidos!');
        return false;
      }
    }
  }
}
