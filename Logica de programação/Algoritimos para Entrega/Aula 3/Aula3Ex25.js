//O “Programa de fidelidade” aumentou o sistema, criando o “Multiplique seus pontos”. O cliente irá digitar quantos cupons tem, e o sistema irá triplicar o valor.

const ler = require("prompt-sync")();


var cupom = ler("Digite aqui a quantidade de cupons que você possui:");

var pontos = cupom * 3;

console.log("De acordo com seus cupons, você tem ", pontos, "pontos no programa de fidelidade!");