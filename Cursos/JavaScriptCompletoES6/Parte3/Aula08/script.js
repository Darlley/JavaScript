// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const rodape = document.querySelector('.copy');

const menu_rodape = menu.cloneNode(true);
rodape.appendChild(menu_rodape);

// Selecione o primeiro DT da dl de Faq
const faqdt = document.querySelector('.faq dt');
console.log(faqdt);


// Selecione o DD referente ao primeiro DT
const dd = faqdt.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;
