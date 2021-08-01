console.log('====== REST')

function showList(empresa, ...clientes){
    console.log(empresa, clientes)
} // Rest = o resto "..." adiciona em um array
showList('Origamid', 'João', 'Maria', 'Pé de Feijão')

console.log('====== SPREAD')

const numeros = [1,2,3,40,500,39]
console.log("O maior é: "+ Math.max(...numeros) ) // esta adicionando um números de cada vez

console.log('====== LISTAS > UL LI')

let itens = document.querySelectorAll('li')
// itens.forEach(item => {
//     console.log(item)
// })
// itens.map(item => {
//     console.log(item)
// })
console.log(`'forEach', nem 'map'(que retorna outra array), funcionam com NodeLists.`)
console.log(`NodeList: ${itens}`)

// tranformar nodeList em array
// 1
console.log(Array.from(itens))
// 2
console.log([...itens])

console.log('====== CLONAR OBJETOS')

const carro = { 
    cor: 'Azul', 
    portas: 4, 
    ano: 2020 
}
const carro_clone = {...carro}
console.log('Carro: ', carro)
console.log('Clone: ', carro_clone)
console.log(`'Carro' é igual ao 'Clone'? ${carro === carro_clone}, são dois objetos diferentes!`)