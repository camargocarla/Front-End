let salarioAntigo = parseFloat(prompt("Informe seu salário"));
let porcentagemAumento = 0;
let quantidadeAumento = 0
let novoSalario = 0;

if (salario < 280){
    porcentagemAumento = 20;
    quantidadeAumento = salarioAntigo * 0.2;
    novoSalario = salarioAntigo + quantidadeAumento;
} else if (salario < 700){
    porcentagemAumento = 15;
    quantidadeAumento = salarioAntigo * 0.15;
    novoSalario = salarioAntigo + quantidadeAumento;
} else if (salario > 700){
    porcentagemAumento = 10;
    quantidadeAumento = salarioAntigo * 0.10;
    novoSalario = salarioAntigo + quantidadeAumento;
}
document.write('O salário antigo é:' + salarioAntigo + '<br>');')