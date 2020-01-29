// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll('.menu a');
menu.forEach(item => {
    item.classList.add('ativo');
    console.log(item);
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
console.log(menu)
menu.forEach((item, index) => {
    if(index !== 0){
        item.classList.remove('ativo');
    }
    console.log(item);
});

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img');
imagens.forEach(item => {
    if(item.attributes.alt){
        console.log(item, true);
    }else{
        console.log(item, false);
    }
});

// Modifique o href do link externo no menu

const external_link = document.querySelector('a[href^="http"]');
console.log(external_link.getAttribute('href'));
external_link.setAttribute('href', "https://google.com/");
console.log(external_link.getAttribute('href'));
console.log(external_link);
