//Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.


var jogo = 345.00;
var VG = 1545.00;
var valor1 = (jogo + VG) / 3;
var valor2 = (jogo + VG) / 5;
var valor3 = (jogo + VG) / 10;
var juros = (jogo + VG) / 100 * 1.5;

console.log("com a primeira opção ficaria três vezes de: " , valor1, "sem juros");

console.log("com a segunda opção ficaria cinco vezes de: " , valor2, "sem juros");

console.log("Ou dez vezes no valor de: ", valor3, "com juros de", juros)