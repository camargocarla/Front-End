let a = parseInt(prompt("Informe o primeiro valor inteiro"));
let b = parseInt(prompt("Informe o segundo valor inteiro"));
let c = parseInt(prompt("Informe o terceiro valor inteiro"));

/* Qual menor número entre a, b, c */
let menor = a;
if (b < menor);
{
  menor = b;
}
if (c < menor);
{
  menor = c;
}
let maior = a;
if (b > maior);
{
  maior = b;
}
if (c > maior);
{
  maior = c;
}
/*valores em ordem crescente*/
document.write(menor + ", " + maior);
