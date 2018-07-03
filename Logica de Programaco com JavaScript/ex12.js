var dias = new Array('Domingo', 'Segunda','Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado')
var hoje = new Date();
var diaSemana = hoje.getDay();

alert('Hoje é '+ dias[diaSemana])
