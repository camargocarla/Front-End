/*Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido. 
Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número*/

let num = "875";
let numInvertido = "";

for (let i = num.length - 1; i >= 0; i--) {
  numInvertido += num[i];
}
document.write(numInvertido);
