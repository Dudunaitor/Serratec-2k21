//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.
const ler = require("prompt-sync")();

var dia = ler("digite o dia: ");
console.log("Digite o dia:", dia);

var NB = ler("qual o numero do boleto? ")
console.log(" Numero do boleto", NB);

var vencimento = 15;

var pagamento = ler("Dia do pagamento do belote: ");

var desconto = pagamento < 13;
var desconto1 = pagamento > 10;
console.log("Vai ter desconto na proxima mensalidade? ", desconto && desconto1);