let email = prompt('Digite o email');
let senha = prompt('Digite a senha');

while (email == senha) {
   alert('Email e senha não podem ser iguais');
   email = prompt('Digite o email');
   senha = prompt('Digite a senha');
}
document.write('Email: ' + email + '<br>');
document.write('Senha: ' + senha + '<br>');
