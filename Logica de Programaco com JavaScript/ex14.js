/*
Criar array com três objetos. Cada objeto deverá ter duas propriedades (nome e email). Depois, basta mostrar na tela o nome e o email de cada um dos objetos do array criado.
*/

  var person1 = new Object();
                person1.nome = 'Naturo'
                person1.email = 'Naruto@gmail.com'

var person2 = new Object();
                person2.nome = 'Goku'
                person2.email = 'Goku@gmail.com'
             
var person3 = new Object();
                person3.nome = 'Saytama'
                person3.email = 'Saytama@gmail.com'

var persons = new Arrar(person1, person2, person3)
console.log(persons)
                
var msg = '';
var x = 0;
while(persons[x]){
  console.log(persons[x].nome)
  msg += persons[x].nome + ' - ' + persons[x].email + '</br>'
  x++;
}

document.querySelector('#output').innerHTML = msg;
