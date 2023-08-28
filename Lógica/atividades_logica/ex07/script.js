let numeros = [];
for (let index = 0; index < 10; index++) {
   numeros.push(parseInt(prompt('Digite um numero')));
}
let par = 0;
let impar = 0;
for (let index = 0; index < numeros.length; index++) {
   if (numeros[index] % 2 === 0) {
      par++;
   } else {
      impar++;
   }
}

document.write('Pares: ' + par + '<br>');
document.write('Impares: ' + impar + '<br>');
