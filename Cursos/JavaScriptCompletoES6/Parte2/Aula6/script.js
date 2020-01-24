// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dados_pessoais = {
  nome: window.prompt("Informe o primeiro nome: "),
  sobrenome: window.prompt("Informe o sobrenome: ")
}
console.log(dados_pessoais.nome);
console.log(dados_pessoais.sobrenome);

// Crie um método no objeto anterior, que mostre o seu nome completo
dados_pessoais.nome_completo = function(nome, sobrenome){
  return this.nome + " " + this.sobrenome; 
}
console.log(dados_pessoais.nome_completo());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log("Preço do carro: " + carro.preco)
carro.preco = 3000;
console.log("Preço do carro alterado: " + carro.preco)
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var homem = true;
var cachorro = {
  raça: "Labrador",
  cor: "preto",
  idade: 10,
  latir(){
    if(homem == true){
      return alert("latindo");
    }
  },
}
console.log(cachorro.latir());
