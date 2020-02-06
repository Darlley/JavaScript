// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

let classCursos = document.querySelectorAll('.curso');
classCursos = Array.from(classCursos);
const cursos = classCursos.map((curso) => {
	const titulo = curso.querySelector('h1').textContent;
	const descricao = curso.querySelector('p').textContent;
	const aulas = curso.querySelector('.aulas').textContent;
	const horas = curso.querySelector('.horas').textContent;
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
const nMaior100 = numeros.filter(i => i > 100);
console.log(nMaior100.sort());


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
console.log(instrumentos.some((instrumento) => {
	return instrumento == 'Baixo';
}));

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
