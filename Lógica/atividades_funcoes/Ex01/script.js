/*Crie um programa onde o usuário informa 2 numeros e 
você mostra as operações de soma, subtração, multiplicação e divisão.

OBS: Criar uma Função unica, que recebe qual a operação via parametro
e assim mostrar na tela.*/

function operacao(num1, num2, operacao)
  if (operacao == '+') {
   document.write(num1, num2);
} else if (operacao == '-'){
    document.write(num1, num2);
} else if (operacao == '*'){
    document.write(num1, num2);
} else if (operacao == '/'){
    document.write(num1, num2);
}
  

operacao(1, 2, "+"); // 3
operacao(2, 1, "-"); // 1
operacao(3, 1, "*"); // 3
operacao(3, 3, "/"); // 1

