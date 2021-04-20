const ler = require("prompt-sync")();


console.log("Nossa agencia de viagens, faremos um pacotão a sua escolha: ");

console.log(`Destinos: 
1. Paris
2. Londres
3. Roma
`)

let escolha = ler ("Selecione um destino: ");

switch (escolha) {
    case "1": msg = `Você escolhou Paris... Boa escolha!
    Pacote 1: Viagem Torre Eiffel
    Pacote 2: Viagem com Rio Sena
    Pacote 3: Viagem com Hotel 5 estrelas
    `
}


let pacote = ler ("Selecione um pacote: ");

console.log(`Boa viagem  utilizando o destino ${destino} e o pacote ${pacote}!`);

//repetir add cases para o as demais cidades