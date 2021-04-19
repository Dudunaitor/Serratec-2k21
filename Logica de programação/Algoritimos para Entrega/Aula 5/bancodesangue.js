
const prompt = require("prompt-sync")();

console.log ("= Banco de Sangue=");
console.log( "Digite 'Sim' ou 'Não' nas restrições a seguir");

//entradas
var idade = prompt("Idade abaixo de 16 ou acima de 69 ");
var peso = prompt("Peso menos de 50kg ");
var hepatite = prompt("Portador de Hepatite ");
var malaria = prompt("Já teve Malaria ");
var recente = prompt("Fez doação recente ");

//Processamento

var resultado =
 idade == "sim" ||
 peso == "sim" ||
 hepatite == "sim" ||
 malaria == "sim" ||
 recente == "sim";


resultado = !resultado


//saida
console.log("[Resultado fa triagem]");
comsole.log("Pode doar sangue?", resultado);


