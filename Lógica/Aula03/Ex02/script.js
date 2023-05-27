/*Crie um programa onde o usuario informa uma quantidade indeterminada de notas 
e você (COM UMA FUNÇÃO) mostra a média das notas*/

function calcularMedia() {
  let notas = [];
  let soma = 0;
  let media = 0;
  let continuar = true;

  while (continuar == true) {
    let nota = parseFloat(prompt("Informe a nota:"));
    notas.push(nota);

    continuar = confirm("Deseja continuar?");
  }
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  media = soma / notas.length;
  console.log("A média é: " + media);
}

calcularMedia();
