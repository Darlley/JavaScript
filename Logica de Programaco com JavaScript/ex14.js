/*
Criar array com três objetos. Cada objeto deverá ter duas propriedades (nome e email). Depois, basta mostrar na tela o nome e o email de cada um dos objetos do array criado.
*/

var produto1 = new Object();
produto1.nome = 'Caneta';
produto1.preco = 2.2;
produto1.estoque = 10;

var msg = ''
msg += 'Nome: '+ produto1.nome + '</br>';
msg += 'Preço: '+ produto1.preco + '</br>';
msg += 'Estoque: '+ produto1.estoque + '</br>';

document.querySelector('#output').innerHTML = msg;
