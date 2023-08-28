let sexo = prompt("Digite seu sexo: M ou F");
let altura = parseFloat(prompt("Digite sua altura"));

let pesoIdeal;

if (sexo == "M") {
  pesoIdeal = 72.7 * altura - 58;
} else if (sexo == "F") {
  pesoIdeal = 62.1 * altura - 44.7;
}
document.write("Seu peso ideal é de: " + pesoIdeal, "<br>");
