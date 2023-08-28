let pedido = prompt(
  "Escolha seu pedido: Pizza, Pão de Queijo, Macarrão ou Pastel"
);
let valorPedido;

if (pedido == "Pizza") {
  valorPedido = 12.0;
} else if (pedido == "Pão de Queijo") {
  valorPedido = 4.0;
} else if (pedido == "Macarrão") {
  valorPedido = 16.0;
} else if (pedido == "Pastel") {
  valorPedido = 4.5;
}

let valorPagamento = parseFloat(prompt("Qual o valor que você irá pagar?"));
let troco = valorPagamento - valorPedido;

if (troco == 0) {
  document.write("Não há troco.");
} else if (troco > 0) {
  document.write("Seu troco é de: " + troco, "<br>");
}
