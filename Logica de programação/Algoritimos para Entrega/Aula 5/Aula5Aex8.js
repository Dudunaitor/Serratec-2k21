//A finalidade do sistema "Triagem" é ajudar o hospital a identificar os pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, receberá a avaliação na tela.

const ler = require("prompt-sync")();

var nome = ler ("Escreva aqui o seu nome: ");

console.log("Paciente", nome);

var vacina = "ok";

console.log("Já vacinado?", vacina);

var infeccao = false
console.log("Sujeito a infecção?", infeccao);