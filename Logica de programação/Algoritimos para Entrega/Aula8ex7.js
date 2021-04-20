const ler = require ("prompt-sync")();

var agenda = [] 
console.log ("AGENDA");

let dia = ler ("Digite o dia que quer ver");
let compromisso = agenda[dia];

while (dia > 0) {
    if (compromisso) {
      console.log("Quer ver o compromisso desse dia?");
      var ver = ler("Sim ou Não");

      if (ver == "Sim"){
          console.log ('Anotações desse dia" + ${dia}');
          console.log (compromisso);
      }
   }else {
        console.log ("Dia livre. Algum compromisso novo? ");
        let anotacao = ler ("");
        agenda[dia] = anotacao;
    }

     dia = ler("Qual dia quer consultar? ");
     compromisso = agenda[dia];

}
console.log ("Atualizado!");