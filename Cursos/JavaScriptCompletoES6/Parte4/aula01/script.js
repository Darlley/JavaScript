/*

**  OBJETO
const Dom = {
    seletor: "li",
    ativarClasse: function(){
        const elementos = document.querySelectorAll(this.seletor);
        function addClasse(){
            elementos.forEach(elemento => {
                elemento.classList.remove('ativado');
            });
            this.classList.add('ativado');
        }
        elementos.forEach(elemento => {
            elemento.addEventListener('click', addClasse);
        });
    }
}
Dom.ativarClasse();

**  CONSTRUCTOR FUNCTION

function Dom2(seletor) {
    this.extrairElementos = function(){
        let elementos = document.querySelectorAll(seletor);
        return elementos;
    },
    this.ativarClasse = function(classe){
        let elementos = document.querySelectorAll(seletor);
        function adicionarClasse(){
            elementos.forEach(elemento => {
                elemento.classList.remove(classe);
            });
            this.classList.add(classe);
        }
        elementos.forEach(elemento => {
            elemento.addEventListener('click', adicionarClasse);
        });
    }
}

const novoElemento = new Dom2('p');
novoElemento.ativarClasse('novaClasse');
if(novoElemento){
    novoElemento.extrairElementos().forEach((elemento, index) => {
        elemento.innerHTML += (index+1);
        console.log(elemento, index);
    });
}


**  EXERCÍCIOS: 

Transforme o objeto abaixo em uma Constructor Function */
function Pessoa(nomePessoa, idadePessoa){
    this.nome = nomePessoa;
    this.idade = idadePessoa;
    this.andar = function() {
      console.log(this.nome + ' andou');
    }
}
  
// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos
const pessoa1 = new Pessoa('João', 20);
const pessoa2 = new Pessoa('Maria', 25);
const pessoa3 = new Pessoa('Bruno', 15);
  
// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
function Dom(tag){
    const elementos = document.querySelectorAll(tag);

    this.elements = elementos;
    this.addClass = function(classe){
        this.elements.forEach(elemento => {
            elemento.classList.add(classe);
        });
    };
    this.removeClass = function(classe){
        this.elements.forEach(elemento => {
            elemento.classList.remove(classe);
        });
    }
}

const novaAlteração = new Dom('li');
novaAlteração.addClass('ativado');
novaAlteração.removeClass('ativado');
