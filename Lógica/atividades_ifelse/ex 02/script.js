let nota1 = parseFloat(prompt("Digite o nota"));
let nota2 = parseFloat(prompt("Digite o segunda nota"));
let nota3 = parseFloat(prompt("Digite o terceira nota"));

let resultadoMedia = (nota1 + nota2 + nota3) / 3;

if (resultadoMedia < 7) {
  document.write("Sua média é:  " + resultadoMedia + " Você foi reprovado.");
} else if (media == 7) {
  document.write("Sua média é:" + resultadoMedia + "Você foi aprovado.");
} else document.write("Você não passou de ano", "<br>");
{
}
