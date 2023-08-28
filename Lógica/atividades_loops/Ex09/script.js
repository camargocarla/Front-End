/*Numa eleição existem três candidatos. 
Faça um programa que peça o número total de eleitores. 
Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.*/

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;

let numEleitores = Number(prompt("Digite o número total de eleitores:"));

for (let i = 0; i < numEleitores; i++) {
  const voto = prompt(
    `Eleitor ${i + 1}, vote em um dos candidatos (1, 2 ou 3):`
  );
  if (voto === "1") {
    candidato1++;
  } else if (voto === "2") {
    candidato2++;
  } else if (voto === "3") {
    candidato3++;
  }
}

alert(
  `Resultado da votação:\nCandidato 1: ${candidato1} votos\nCandidato 2: ${candidato2} votos\nCandidato 3: ${candidato3} votos`
);
