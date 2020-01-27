// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
imagens.forEach(function(imagem, index){
    console.log(imagem, index);
});

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens_animais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagens_animais);
imagens_animais.forEach(function(item){
    console.log(item);
});

// Selecione todos os links internos (onde o href começa com #)
const links_internos = document.querySelectorAll('a[href^="#"]');
console.log(links_internos);
links_internos.forEach(function(itens){
    console.log(itens);
});

// Selecione o primeiro h2 dentro de .animais-descricao
const animais_description = document.querySelectorAll('.animais-descricao');
const subtitulos_animais_description = document.querySelectorAll('h2');
console.log(subtitulos_animais_description[0]);
console.log(subtitulos_animais_description[0].textContent);

// CORREÇÃO: MODO MAIS FÁCIL
const correcao = document.querySelector('.animais-descricao h2');
console.log(correcao);

// Selecione o último p do site 
const ultimo_paragrafo = document.querySelectorAll('p');
ultimo_paragrafo.forEach(function(item, index){
    let total = ultimo_paragrafo.length;
    if(index == (total-1)){
        console.log(item)
    }
}); 

// CORREÇÃO: MODO MAIS FÁCIL
console.log(ultimo_paragrafo[--ultimo_paragrafo.length])
