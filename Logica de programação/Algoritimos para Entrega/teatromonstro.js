const ler = require("prompt-sync")();


var total =  0 
var h = 0;
var m = 0 ;
while (total < 5) {
    var idade = ler("sua idade: ");
    
    if (idade < 16) {
        console.log("não vai dar não");
    }
    else{ 
        let genero = ler("digite M ou F: ");
        m =+ (genero == "M");
        f =+ (genero == "F");
        total++;
    }
} 


console.log(`Gerente: Homem : ${h} Mulheres: ${m}`);
console.log("Peça começou!")