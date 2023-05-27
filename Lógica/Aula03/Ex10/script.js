/*`Peça ao usuário uma quantidade de linhas e e outra de colunas, 
depois declare tal matriz,
inicialize todos os elementos de 1 até 'linha x coluna'.*/


// solicita que o usuário informe a quantidade de linhas e colunas
const linhas = parseInt(prompt("Informe a quantidade de linhas da matriz:"));
const colunas = parseInt(prompt("Informe a quantidade de colunas da matriz:"));

// declara a matriz
const matriz = [];

// inicializa os elementos da matriz com valores de 1 a linha x coluna
for (let i = 1; i <= linhas; i++) {
  matriz[i - 1] = [];
  for (let j = 1; j <= colunas; j++) {
    matriz[i - 1][j - 1] = i * j;
  }
}

// exibe a matriz
document.write(matriz);
