/*``Crie um programa que pergunta ao usuário se ele deseja converter uma temperatura de grau Celsius para Farenheit ou vice-versa. 
Para cada opção, crie uma função. E depois mostre o resultado da conversão.``*/

function converterCelsiusParaFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function converterFahrenheitParaCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

const opcao = prompt(
  "Digite 1 para converter Celsius para Fahrenheit ou 2 para converter Fahrenheit para Celsius:"
);

if (opcao === "1") {
  const celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
  const fahrenheit = converterCelsiusParaFahrenheit(celsius);
  document.write(`${celsius}°C equivalem a ${fahrenheit}°F.`);
} else if (opcao === "2") {
  const fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));
  const celsius = converterFahrenheitParaCelsius(fahrenheit);
  document.write(`${fahrenheit}°F equivalem a ${celsius}°C.`);
} else {
  document.write("Opção inválida.");
}
