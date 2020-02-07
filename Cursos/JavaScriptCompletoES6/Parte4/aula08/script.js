// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acumulador, item) => {
    return acumulador + item.innerText.length;
}, 0)
console.log(totalCaracteres);


// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement(tag); //criar tag
    elemento.classList.add(classe); // criar classe
    elemento.innerText = conteudo; // criar conteudo
    return elemento;
}
console.log(criarElemento('ul', 'ativo', 'conteudo'));


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const titulo = criarElemento.bind(null, 'h1', 'titulo');
console.log(titulo("Cursos"))
