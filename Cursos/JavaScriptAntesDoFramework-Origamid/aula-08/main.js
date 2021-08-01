const precos = [
    "Crédito",
    "R$ 200",
    "R$ 400",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

// FILTER
const precosFiltro = precos.filter( preco => preco.includes('R$'))
console.log('Filter - ' + precosFiltro)

// MAP
const precoNumero = precosFiltro.map(preco => +preco.replace('R$ ', '') )
console.log('Map - ' + precoNumero)

// REDUCE
const soma = precoNumero.reduce( (acumulador, item) => {
    console.log(`${acumulador} + ${item}`)
    return acumulador + item
})
console.log('Reduce - ' + soma)