
const ler = require("prompt-sync")();

console.log("=Streaming da dona Leila=");

console.log("sugerimos os generos: Horror, comédia e Drama");

var genero = ler("Digite aqui o que voce deseja: ");
 
var mensagem;
var mensagem1;
var mensagem2;



switch(genero){
    case "horror":
      mensagem = " filme A, é 75% indicado";
      mensagem1 = "filme B, é 85% indicado";
      mensagem2 = "filme C, é 63% indicado";
      break;
    case "comedia":
      mensagem =  "filme D, é 99% indicado";
      mensagem1 = "filme E, é 57% indicado";
      mensagem2 = "filme F, é 45% indicado"
      break;  
    case "drama":
      mensagem = "filme G, é 38% de indicado";
      mensagem1 = "filme H, é 78% de indicação";
      mensagem2 = "filme I, é 95% de indicação";
      break;
    case "nenhum":
        mensagem = "melhor você ir para Netflix";
        break;
}
console.log("Temos para você os seguntes filmes do genero", genero);
console.log(mensagem);
console.log(mensagem1);
console.log(mensagem2);

var filme = ler ("Escolha o filme de acordo com o genero escolhido: ");

var mensagem3;


switch(filme){
    case "filme A":
      mensagem3 = "ganhador do oscar de de melhor efeito especiais!";
      break;
    case "filme B":
      mensagem3 = "Aclamado pela critica";
      break;  
    case "filme C":
      mensagem3 = "Um dos filmes mais assustadores da sua geração";
      break;  
    case "filme D":
      mensagem3 = "Indicado a 6 oscars";
      break;
    case "filme E":
      mensagem3 = "Diversão para toda familia";
      break;
    case "filme F":
      mensagem3 = "hoje na sessão da tarde";
      break;
    case "filme G":
      mensagem3 = "Indicado ao premio framboesa de ouro";
      break;
    case "filme H":
      mensagem3 = "Um sucesso frances";
      break;
    case "filme I":
      mensagem3 = "inspirado em fatos reais";
      break;
}
console.log(mensagem3);

console.log("Esperamos que você aproveite o filme! Divirta-se!")