/*O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia 
 um conjunto de 5 de temperaturas, 
e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.*/

let temperaturas = [];

// Lê as 5 temperaturas informadas pelo usuário
for (let i = 0; i < 5; i++) {
  let temp = parseFloat(prompt("Informe a temperatura " + (i + 1)));
  temperaturas.push(temp);
}

// Encontra a menor e a maior temperatura no array
let menorTemp = Math.min(...temperaturas);
let maiorTemp = Math.max(...temperaturas);

// Calcula a média das temperaturas
let soma = 0;
for (let i = 0; i < temperaturas.length; i++) {
  soma += temperaturas[i];
}
let media = soma / temperaturas.length;

// Exibe os resultados
console.log("Menor temperatura: " + menorTemp);
console.log("Maior temperatura: " + maiorTemp);
console.log("Média das temperaturas: " + media);
