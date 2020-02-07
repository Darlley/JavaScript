// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
let section_cursos = document.querySelectorAll('.curso');
section_cursos = Array.from(section_cursos);
const cursos = section_cursos.map(curso => {
    const titulo = curso.querySelector('h1').innerHTML;
    const descricao = curso.querySelector('p').innerHTML;
    const aulas = curso.querySelector('.aulas').innerHTML;
    const horas = curso.querySelector('.horas').innerHTML;
    return {
        titulo,
        descricao,
        aulas,
        horas
    }
});
console.log(cursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
console.log(numeros.filter(item => item > 100).sort()); 

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some(item => item == 'Baixo'));


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

const total = compras.reduce((acumulador, atual) => {
	const preco = +atual.preco.replace('R$', '').replace(',', '.');
	return acumulador + preco;
}, 0);
console.log(total);
