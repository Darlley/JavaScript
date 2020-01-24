// Crie uma função para verificar se um valor é Truthy

var valor = "Darlley"
function verdadeiroOuFalso(valor){
    return "O valor informado é " + !!valor
}
window.alert(verdadeiroOuFalso(valor));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
var tamanhoLateral = 5;
function perimetro(tamanhoLateral){
    return tamanhoLateral * 4
}
console.log(perimetro(valor));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto("Darlley", "Brasil"));


// Crie uma função que verifica se um número é par
function par(n){
    if(n%2==0){
        return "É par!"
    }else{
        return "É impar!"
    }
}
console.log(par(valor));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(valor){
    return typeof valor;
}
console.log(tipo(valor));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener(
    "scroll",
    function(){
        console.log("Darlley");
    }
)

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}  
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
