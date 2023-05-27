/*
`Faça um programa que pergunte a hora ao usuário e, baseando-se no horario descrito exiba a saudação apropriada.`

-  0-11 Bom dia
-  12-17 Boa tarde
-  18-23 Boa noite*/


// solicita que o usuário informe a hora (sem os minutos)
const hora = parseInt(prompt("Que horas são? (Informe um número de 0 a 23)"));

// função para exibir a saudação apropriada com base na hora informada
function exibirSaudacao(hora) {
  if (hora >= 0 && hora < 12) {
    return "Bom dia";
  } else if (hora >= 12 && hora < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

// exibe a saudação apropriada com base na hora informada
document.write(exibirSaudacao(hora));
