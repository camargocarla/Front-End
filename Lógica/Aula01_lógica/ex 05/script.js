let numero1 = parseFloat(prompt("Digite o primeiro numero"));
let numero2 = parseFloat(prompt("Digite o segundo numero"));
let numero3 = parseFloat(prompt("Digite o terceiro numero"));

if (numero1 < numero2 && numero1 < numero3) {
  document.write("O menor numero é " + numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
  document.write("O menor numero é " + numero2);
} else if (numero3 < numero2 && numero3 < numero1) {
  document.write("O menor numero é " + numero3);
}
