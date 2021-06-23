// VARIAVEIS COMPOSTAS 


/* Um Vetor (Array Unidimensional) ou uma variavel composta é uma variavel que tem 
varios elementos, e cada elemento é composto por seu valor e por uma chave de 
identificação (Index)

var i = [item1, "item2", item3()] -> variavel composta (Vetor)
[item1, "item2", item3()] -> elementos de algum tipo primitivo (number, string, etc)
   0       1        2       -> são os index ou posições dos elementos no Vetor (3)
*/

//let num = []
let num = [5,8,2,9,3]
console.log(`Nosso vetor é o ${num}`)
// acrescentar elementos no Vetor
// let num = [5,8,4]
// num[3] = 6 -> [5,8,4,6]
console.log('\n- - - - - - - - - - COM MÉTODO .push()')
console.log('Adicionado valor 7')
num.push(7) // acrescenta valores na ultima posição
console.log(`Nosso vetor com .push() é ${num}`)

// o  A T R I B U T O  .length retorna o tamanho do vetor em posições (ultimo index+1)
console.log('\n- - - - - - - - - - COM ATRIBUTO .length')
console.log(`O tamanho do vetor é ${num.length} posições`)
// num.sort() reordena os elementos dentro do Vetor em ordem crescente
console.log('\n- - - - - - - - - - COM MÉTODO sort()')
console.log(`O vetor com .sort() é ${num.sort()}` )
console.log(`O primeiro elemento é ${num[0]}` )

console.log("\n- - - - - - - - - COM FOR")
for(var i = 0; i<num.length; i++){
    console.log(`[FOR] Posição ${i} - valor: ${num[i]}` )
}

console.log('\n- - - - - - - - - COM FOR IN')
for (let i in num){
    console.log(`[FOR IN] Posição ${i} - valor: ${num[i]}`)
}

// o  M É T O D O  .indexOf(x) busca a posição de um valor x dentro de um Array 
// (-1 caso não encontrar)
console.log('\n- - - - - - - - - - COM MÉTODO indexOf()')
let valor = 5
let posicao = num.indexOf(valor)
console.log('Vetor completo: [' + num + ']')
if(posicao != -1){
    console.log(`O valor ${valor} se encontra posição[${posicao}] do vetor!`)
} else {
    console.log(`O valor ${valor} não foi encontrado no vetor!`)
}