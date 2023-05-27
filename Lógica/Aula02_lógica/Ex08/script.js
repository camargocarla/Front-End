/*Faça um programa que peça o valor do carro e o ano de lançamento e se o valor for menor que 20.000 
ou o ano for menor que 2020. Pergunte de novo até ele informar um carro mais novo ou mais caro.*/

let valor = parseFloat(prompt("Informe o valor do Veículo"));
let ano = parseInt(prompt("Ano de lançamento"));

while (valor < 20000 || ano < 2020) {
  alert("Valor ou ano inválidos");
  valor = parseFloat(prompt("Informe o valor do Veículo"));
  ano = parseInt(prompt("Ano de lançamento"));
}
document.write("Aprovado!");
