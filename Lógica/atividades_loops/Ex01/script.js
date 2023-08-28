let soma = 0;
for (i = 0; i < 3; i++) {
  let nota = parseFloat(prompt("Digite a nota"));
  soma += nota;
}

let media = soma / 3;

console.log(media.toFixed(2));
