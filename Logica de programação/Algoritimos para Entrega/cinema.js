const ler = require("prompt-sync")();

console.log("Cinema!")

var listaNome = [];
var listaTipo = [];
var meia = 0;

while (listaNome.length < 5){
    var nome = ler ("Nome: ");
    listaNome.push(nome);
    
    var tipo = ler ("Inteira ou meia? ");
   
    if ( tipo == "M"){
        if(meia == 2){
            console.log(
                "Reserva de meia entrada finalizada. Seu ingresso sera normal"
            );
            tipo = "I";
        }else {    
            meia++
        };  
            listaTipo.push(tipo);
    }
}


for(let  i = 0; i <listaNome.length; i++)
    console.log(`Ingresso: ${i + 1} | Nome: ${listaNome[i]} | Tipo: ${listaTipo[i]}`);