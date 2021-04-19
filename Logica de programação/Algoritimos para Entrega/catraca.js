const ler = require("prompt-sync")();

console.log("O Onibus quebrou")

let ganhos = 0.0;
let pagantes = 0;
let gratuidades= 0;
let qtde = 0;


let tipo = "P";

while (tipo != "fim") {
    let tipo = ler("Passageiro: Pagante ou gratuidade (P ou G): ");

    pagantes += tipo == "P" ? 1 : 0;
    gratuidades += tipo == "G" ? 1 : 0;
}

const VALOR_PSG  = 4.4;
ganhos = pagantes * VALOR_PSG;
gratuidades = total - pagantes;

let txt = `Relatorio do Fiscal de Viação:
Quantas pessoas entratam até o ocorrencia: ${qtde}
Qnatos pagantes: ${pagantes}
Quantas gratuidades: ${gratuidades}
Total dos ganhos: ${ganhos}`;

console.log(txt)


