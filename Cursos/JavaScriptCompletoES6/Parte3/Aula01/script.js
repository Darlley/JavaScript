// Retorne o url da página atual utilizando o objeto window
const caminho = window.location.href
console.log(`Caminho (URL): ${caminho}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classe = document.querySelector('.ativo');
console.log(`Conteúdo da classe .ativo: ${classe.textContent}`);

// Retorne a linguagem do navegador
const idioma = window.navigator.language;
console.log(`Idioma do nvegador: ${idioma}`);

// Retorne a largura da janela
const largura = window.innerWidth; 
console.log(`Largura do navegador: ${largura}`);
