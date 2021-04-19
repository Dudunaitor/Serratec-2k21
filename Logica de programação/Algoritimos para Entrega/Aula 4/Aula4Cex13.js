//Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

const ler = require("prompt-sync")();

var temperatura = ler("Qual a temperatura?")

var limite = 37.5
var sim = "Sim";
var As = sim == "Sim";

console.log("usa mascara?", As);

var TL = temperatura <= limite;

console.log("Qual a temperatura?", TL);

var entrar = As && TL;

console.log("Pode entrar?", entrar)