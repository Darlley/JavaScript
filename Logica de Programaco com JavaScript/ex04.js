/*
Para esse exercício, tente reescrever a lógica que fizemos em um exercício anterior, de modo a torná-la mais curta.
*/

var J1 = parseFloat(prompt("Digite um número: "));
var J2 = parseFloat(prompt("Digite outro número: "));
m = (J1 + J2)/2

if(J1 > 0 || J2 > 0 || m > 5){
  alert('Reprovado!')
}else{
  alert("Aprovado!")
}
