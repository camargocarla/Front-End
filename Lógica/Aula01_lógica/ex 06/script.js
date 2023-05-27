let l1 = parseFloat(prompt("Digite o lado 1"));
let l2 = parseFloat(prompt("Digite o lado 2"));
let l3 = parseFloat(prompt("Digite o lado 3"));

if (l1 + l2 > l3 && l2 + l3 > l1 && l3 + l1 > l2) {
  document.write("\nÉ um triângulo.");
} else {
  document.write("\nNão é um triângulo.");
}
if (l1 == l2 && l1 == l3) {
  document.write("\nCaso seja um triângulo, é equilátero.");
} else if (
  (l1 == l2 && l1 != l3) ||
  (l2 == l3 && l2 != l1) ||
  (l3 == l1 && l3 != l2)
) {
  document.write("\nCaso seja um triângulo é isósceles.");
} else if (l1 != l2 && l1 != l3 && l3 != l2) {
  document.write("\nCaso seja um triângulo é escaleno.");
} else {
  document.write("\nNão possui classificação, pois não é um triângulo.");
}
