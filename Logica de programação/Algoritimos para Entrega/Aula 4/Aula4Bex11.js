//No programa “Vote no 20”, após solicitar a idade, o sistema apresenta se o indivíduo já pode exercer sua cidadania nas urnas. 

const ler = require("prompt-sync")();



var idade = ler("digite aqui sua idade: ")
var IdadeMinima = 16;
var votar = idade >= IdadeMinima;


console.log("Você já pode votar?", votar);
