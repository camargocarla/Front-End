/*`
`Crie uma função para imprimir uma quantidade de vezes para um numero N`

```text
1
2   2
3   3   3
.....
n   n   n   n   n   n...
```*/

function imprimirMatriz(n) {
    for (let i = 1; i <= n; i++) {
      let linha = "";
      for (let j = 1; j <= i; j++) {
        linha += `${i} `;
      }
      document.write(linha);
    }
  }
  
  const n = parseInt(prompt("Digite um número:"));
  imprimirMatriz(n);
  