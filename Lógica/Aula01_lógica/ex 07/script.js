let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
let nota3 = parseFloat(prompt("Digite a terceira nota"));

let mediaNotas = 7;
let numFaltas = 25;

if (mediaNotas >= 7 && numFaltas <= 25) {
  document.write("Você passou de ano com média: " + mediaNotas, "<br>");
} else {
  document.write("Você não passou de ano", "<br>");
}
