/*`Peça para o usuário informar N numeros e adicione eles em uma lista depois com uma função 
verifique cada numero se ele é par e retorne ao final quantos numeros são pares e quantos são impares`*/

function contarParesImpares(numeros) {
  let pares = 0;
  let impares = 0;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  return { pares, impares };
}

const numeros = [];

// Pedir para o usuário informar os números
const quantidade = parseInt(prompt("Quantos números deseja informar?"));
for (let i = 0; i < quantidade; i++) {
  const numero = parseInt(prompt(`Informe o ${i + 1}º número:`));
  numeros.push(numero);
}

const resultado = contarParesImpares(numeros);

document.write(`Quantidade de números pares: ${resultado.pares} \n`);
document.write(`Quantidade de números ímpares: ${resultado.impares}`);
