const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidas_primeiro = comidas.shift();
console.log(comidas_primeiro);

// Remova o último valor de comidas e coloque em uma variável
const comidas_ultimo = comidas.pop();
console.log(comidas_ultimo);

// Adicione 'Arroz' ao final da array
comidas.push('Azzoz');
console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort();
console.log(estudantes);

// Inverta a ordem dos estudantes
estudantes.reverse();
console.log(estudantes);

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana'));

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana'));

let html = `<section>
	<div>Sobre</div>
	<div>Produtos</div>
    <div>Contato</div>
</section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section').join('ul').split('div').join('li');
console.log(html);

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
console.log("Array original	: " + carros);
const carros_Clone = [].concat(carros); // const carros_Clone = carros.slice()
carros.pop();
console.log("Array pop		: " + carros);
console.log("Array clone		: " + carros_Clone);
