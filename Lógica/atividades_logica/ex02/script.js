let nota = parseFloat(prompt('Digite a nota'));

while (nota < 0 || nota > 10) {
   nota = parseFloat(prompt('Digite a nota'));
}

console.log(nota);
