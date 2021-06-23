// diferentes dos arrays, os OBJETOS usam nomes nos index
// objetos guardam vetores (métodos)

let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(){
        console.log('- - - Engordou +2kg')
        this.peso+=2
    }
}

console.log( `${amigo.nome} pesa ${amigo.peso}kg` )
amigo.engordar()
console.log( `${amigo.nome} pesa ${amigo.peso}kg` )