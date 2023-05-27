/*Escreva um script que verifica se 
um número é negativo, positivo ou igual a zero 
e exibe a mensagem correspondente.*/

let numero = parseInt(prompt("Informe um número"));

if (numero < 0) {
  document.write("Esse número é negativo");
} else if (numero > 0) {
  document.write("Esse número é positivo");
} else {
  document.write("Esse número é igual a ZERO");
}
