//fazer jogador 1 digitar um número
var J1 = prompt("Digite um número: ");
J1 = parseInt(J1);

//fazer jogador 2 digitar outro número
var J2 = parseInt(prompt("Digite outro número: "));
J2 = parseInt(J2);

//se forem iguais, mostrar a mensagaem 'empate'
if(J1 == J2){
  alert('Empate')

//sortear um numero de 0 a 1
}else{
  var sort = parseInt(Math.random()*2)
  
//se o numero sorteado for 0, ganha quem escolher o numero MENOR
  if(sort === 0){
    if(J1 < J2){
      alert("O jogador 1 ganhou!")

    }else{
      alert("O jogador 2 ganhou!")
    }
  }else{
 
//se o numero sorteado for 1, ganha quem escolher o numero MAIOR
    if(J1 > J2){
      alert("O jogador 2 ganhou!")
    }else{
      alert("O jogador 1 ganhou!")
    }
  }
}
