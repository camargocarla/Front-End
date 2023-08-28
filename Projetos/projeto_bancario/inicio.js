function consultarSaldo() {
  var saldo = 5000.00; // Saldo fictício
  
  alert("Saldo atual: R$ " + saldo.toFixed(2));
}

// Função para realizar uma transferência
function realizarTransferencia() {
  var contaDestino = prompt("Informe a conta de destino:");
  var valor = parseFloat(prompt("Informe o valor da transferência:"));
  
  // Simulação de transferência (apenas para contas no mesmo banco)
  alert("Transferência realizada com sucesso:\n\nConta de Destino: " + contaDestino + "\nValor: R$ " + valor.toFixed(2));
}

// Função para consultar o extrato
function consultarExtrato() {
  var extrato = [
      { data: '10/06/2023', descricao: 'Depósito', valor: 2000.00 },
      { data: '09/06/2023', descricao: 'Compra', valor: -150.00 },
      { data: '08/06/2023', descricao: 'Transferência', valor: -500.00 }
  ]; // Extrato fictício
  
  var extratoString = "Extrato:\n\n";
  
  for (var i = 0; i < extrato.length; i++) {
      extratoString += extrato[i].data + ' - ' + extrato[i].descricao + ': R$ ' + extrato[i].valor.toFixed(2) + '\n';
  }
  
  alert(extratoString);
}

// Função para sair do sistema
function sairDoSistema() {
  // Redireciona o usuário para a página de login
  window.location.href = "index.html";
}