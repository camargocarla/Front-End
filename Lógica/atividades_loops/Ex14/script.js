/*Escreva um código que verifica se um número é primo ou não e exibe a mensagem correspondente.*/

let num = parseInt(prompt("Insira um número"));
let primo = true;

if (num === 1) {
  primo = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  document.write(num + " é um número primo.");
} else {
  document.write(num + " não é um número primo.");
}
