//Escrever um programa que solicita um número, calcula o dobro do valor, e devolve a mensagem: "O dobro de x foi y.", substituindo x e y pelos valores.
//Dica: Utilize uma variável nova para armazenar o resultado.


const ler = require("prompt-sync")();


var X = ler("digite um numero aqui!");

var Y = X * 2;

console.log(" o dobro de", X,",o numero que você digitou, é ", Y);