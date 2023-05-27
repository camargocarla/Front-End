/*`Peça para o usuário informar seu salário,
 após isso peça para informar a quantidade de aumento de 0 até 100 (Porcentagem), 
 Com uma função calcule quanto de aumento em Reais o funcionario terá e 
 retorne o salario antigo o novo salario e o aumento que foi dado`*/

// solicita que o usuário informe o salário atual
const salarioAtual = parseFloat(prompt("Informe seu salário atual:"));

// solicita que o usuário informe a porcentagem de aumento desejada
const aumentoPorcentagem = parseFloat(
  prompt("Informe a porcentagem de aumento desejada (de 0 a 100):")
);

// função para calcular o valor do aumento em reais
function calcularAumento(salarioAtual, aumentoPorcentagem) {
  const aumentoValor = salarioAtual * (aumentoPorcentagem / 100);
  return aumentoValor;
}

// cálculo do aumento em reais
const aumentoReais = calcularAumento(salarioAtual, aumentoPorcentagem);

// cálculo do novo salário
const novoSalario = salarioAtual + aumentoReais;

// exibição dos resultados
document.write(`Salário antigo: R$ ${salarioAtual.toFixed(2)} \n`);
document.write(`Novo salário: R$ ${novoSalario.toFixed(2)} \n`);
document.write(`Aumento: R$ ${aumentoReais.toFixed(2)}`);
