// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciatopo = document.querySelector('img');
console.log(distanciatopo, distanciatopo.offsetTop);

// Retorne a soma da largura de todas as imagens
const imagens = document.querySelectorAll('img');
var tamanho = 0;
imagens.forEach(imagem => {
    console.log(imagem, imagem.clientWidth);
    tamanho += imagem.clientWidth; 
});

console.log("Total: " + tamanho);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach(link => {
    const larguraLink = link.offsetWidth;
    const alturaLink = link.offsetWidth;
    if(larguraLink >= 48 && alturaLink >= 48){
        console.log(link, "Ok!");
    }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const dimensao = window.innerWidth;
if(dimensao < 720){
    let menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}
