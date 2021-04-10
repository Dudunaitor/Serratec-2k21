//Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.

const ler = require("prompt-sync")();

console.log("==Maioral==");
var player1 = ler("Player 1 :");
var player2 = ler("Player 2 :");

console.log(":Resultados:");

var maioral1 = player1 >= player2;
var maioral2 = player2 >= player1;
var maioral3 = player1 == player2;


console.log("Player 1 venceu?", maioral1);
console.log("Player 2 venceu?", maioral2);
console.log("Houve empate", maioral3);