/*`Peça para o usuario informar qual mês ele faz aniversário, 
com uma função verifique se o numero do mes é par ou impar 
e quantos meses faltam para acabar o ano`*/


// solicita que o usuário informe o mês de aniversário
const mesAniversario = parseInt(prompt("Qual é o mês do seu aniversário? (Informe um número de 1 a 12)"));

// função para verificar se o número do mês é par ou ímpar
function verificarParidadeMes(mes) {
  if (mes % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

// exibe se o número do mês é par ou ímpar
console.log(`O número do mês de aniversário informado é ${verificarParidadeMes(mesAniversario)}.`);

// variável que representa o mês atual
const mesAtual = new Date().getMonth() + 1;

// cálculo da quantidade de meses que faltam para o final do ano
let mesesRestantes;
if (mesAniversario > mesAtual) {
  mesesRestantes = mesAniversario - mesAtual;
} else {
  mesesRestantes = 12 - mesAtual + mesAniversario;
}

// exibe a quantidade de meses que faltam para o final do ano
document.write(`Faltam ${mesesRestantes} meses para acabar o ano.`);
