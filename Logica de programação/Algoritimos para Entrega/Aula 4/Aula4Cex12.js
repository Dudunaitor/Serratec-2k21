//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.
const ler = require("prompt-sync")();

var LIMITE = 10;

var quantidade = ler("Quantas pessoas estão no locas?");

var local = quantidade <= LIMITE;
console.log("Pode entrar o proximo?", local);
