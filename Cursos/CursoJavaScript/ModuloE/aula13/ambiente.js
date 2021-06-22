





/* "estrutura" sequenciais
*/
console.log("ESTRUTURA SEQUENCIAL")
console.log("-> 1")
console.log("-> 2")
console.log("-> 3")
console.log("-> 4")
console.log("-> 5")


// Estrutura de repetição com teste lógico

// na estrutura while realiza um teste lógico primeiro para depois executar o bloco
var count = 1
console.log("WHILE")
while(count<=5){
    console.log(`-> ${count}`)
    count++;
}

// na estrutura "do while" executa o bloco e então realiza a condição lígica
count=1
console.log("DO WHILE")
do {
    console.log(`-> ${count}`)
    count++
} while(count <= 5)