const prompt = require("prompt-sync")();

//Entrada
const celsius = prompt("Digite os graus Celsius: ");

//Processamento      
let fahr = celsius * 1.8 + 32;  // 9 / 5 = 1.8

//Saída
console.log("Fahrenheit: ", fahr);
//outra leitura do msm programa
const c2 = prompt("Digite outro valor: ");

fahr = c2 * 1.8 + 32;
console.log("outro fahr: ", fahr);