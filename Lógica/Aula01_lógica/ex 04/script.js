let numero1 = parseFloat(prompt("Digite o primeiro numero"));
let numero2 = parseFloat(prompt("Digite o segundo numero"));
let numero3 = parseFloat(prompt("Digite o terceiro numero"));

if (numero1 >= numero2 && numero1 >= numero3) {
  maior = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
  maior = numero2;
} else if (numero3 >= numero2 && numero3 >= numero1) {
  maior = numero3;
}
document.write("maior numero: " + maior);
