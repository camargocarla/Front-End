let numero1 = parseFloat(prompt("Digite o numero"));
let numero2 = parseFloat(prompt("Digite o segundo numero"));
let operacao = prompt(
  "Digite + para adição \n digite - para subtração \n digite * para multiplicar \n digite / para dividir"
);

if (operacao == "+") {
  let conta = numero1 + numero2;
  document.write(conta);
} else if (operacao == "-") {
  let conta = numero1 - numero2;
  document.write(conta);
} else if (operacao == "*") {
  let conta = numero1 * numero2;
  document.write(conta);
} else if (operacao == "/") {
  let conta = numero1 / numero2;
  document.write(conta);
} else {
  document.write("Operação não identificada");
}
