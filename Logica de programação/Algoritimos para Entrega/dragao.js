const ler = require("prompt-sync")();


console.log("Olá, bem vindo ao jogo PROGRAMADRAGÂO");
console.log("*dragão*");
console.log("aqui vocêestá quase no final do jogo, só falta matar o dragão!");
console.log("Lembre-se só exsite uma resposta correta, você terá duas chances!");

console.log("Qual arma você escolhe para matar o dragão?");

let nome = ler("Nome do heroi?");
let msg = `digite
1 para sapato
2 para espada
3 para faca`;
console.log(msg);
let arma = ler("");

console.log(arma);


let vencedor = "dragão";

let txt = `Bravo heroi ${nome}, vendor foi: ${vencedor}`; 
console.log(txt)