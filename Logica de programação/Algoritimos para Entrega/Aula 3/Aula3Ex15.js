//Um programa "Total de produtos" irá solicitar que o cliente digite quantos produtos irá comprar. Depois, exibe a mensagem: "Parabéns por comprar x produtos!", substituindo x pela quantidade.

const prompt = require("prompt-sync")();

const total = prompt("Escolha a quantidade de unidades que você gostaria de comprar: ");


console.log("Parabéns por comprar",  total, "produtos! ");