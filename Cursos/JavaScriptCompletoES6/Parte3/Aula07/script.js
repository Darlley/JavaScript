/* Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links_internos = document.querySelectorAll('a[href^="#"]');
function callbackclicar(event){
    event.preventDefault();
    links_internos.forEach(link => {
        link.classList.remove('ativo');
    });
    event.currentTarget.classList.add('ativo');
} 
links_internos.forEach(link => {
    link.addEventListener('click', callbackclicar);
});
*/

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *');
function mostrar(event){
    console.log(event.currentTarget);
}
elementos.forEach(elemento => {
    elemento.addEventListener('click', mostrar);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function mostrar(event){
   event.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function zoom(event) {
    if(event.key === 't')
      document.body.classList.toggle('font2');
  }
  
  window.addEventListener('keydown', zoom);
  
