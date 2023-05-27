/*Peça ao usuário para digitar várias idades. 
Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores. 
COM UMA FUNÇÃO QUE VERIFICA E RETORNA SE É MAIOR OU MENOR DE IDADE*/

function verificaIdade() {
  let idades = [];
  let MenoresDeIdade = [];
  let MaioresDeIdade = [];
  let continuar = true;

  while (continuar === true) {
    let novaIdade = parseFloat(prompt("Informe sua idade:"));
    idades.push(novaIdade);
    if (novaIdade < 18) {
      MenoresDeIdade.push(novaIdade);
    } else {
      MaioresDeIdade.push(novaIdade);
    }

    continuar = confirm("Deseja continuar?");
  }

  return `Há ${MaioresDeIdade.length} Maiores de idade e ${MenoresDeIdade.length} menores de idade`;
}

console.log(verificaIdade());
