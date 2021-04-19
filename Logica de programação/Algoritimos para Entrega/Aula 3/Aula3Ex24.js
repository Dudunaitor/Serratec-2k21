
//O “Programa de fidelidade” solicitou a criação do sistema “Ver os seus pontos”, onde o cliente poderá consultar seu saldo de pontos. O cliente irá digitar um número inteiro correspondente aos seus cupons. Cada cupom corresponde a 1 ponto.

const ler = require("prompt-sync")();


var cupom = ler("Digite aqui a quantidade de cupons que você possui:");

var pontos = cupom;

console.log("De acordo com seus cupons, você tem ", pontos, "pontos no programa de fidelidade!");