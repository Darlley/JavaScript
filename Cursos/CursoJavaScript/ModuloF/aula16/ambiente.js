// FUNÇÕES

/* Funções são tarefas e rotinas 

as funções são ativadas pelas chamas nome_da_função()
funções tem parametros, retorno e a ação
mas nem toda função usa parametros e nem toda função tem retorno

FUNÇÕES SÃO AÇÕES EXECUTADAS ASSIM QUE SÃO CHAMADAS OU EM DECORRÊNCIA DE ALGUM EVENTO
UMA FUNÇÃO PODE RECEBER PARÂMETROS OU RETORNAR UM RESULTADO

os parametros dentro da chamada da função se chama PARÂMETRO REAL 
os parametros dentro da declaração da função se chama PARÂMETRO FORMAL
*/

console.log('- - - - - - - - - - - FUNÇÃO PAR OU IMPAR')

function calcular(numero){
    let resto = numero % 2
    if(resto == 0){
        return `O número ${numero} é PAR porque o  < resto >  da divisão ${numero}/2 é ${resto}`
    } else {
        return `O número ${numero} é IMPAR porque o  < resto >  da divisão ${numero}/2 é ${resto}`
    }
}
let valor = calcular(10)
console.log(valor)

console.log('\n- - - - - - - - - - - FUNÇÃO SOMA')

function somar(x=0, y=0){ // =0 se algum não for passado considerar como 0
    return `O resultado da soma ${x}+${y}=${x+y}`
}

let resultado = somar()
console.log(resultado)

console.log('\n- - - - - - - - - - - FUNÇÃO DENTRO DE UMA VARIAVÉL')
// conhecida por "FUNÇÃO ANONIMA"

let dobrar = function(x){
    return x*2
}
console.log( dobrar(5) )

console.log('\n- - - - - - - - - - - ARROW FUNCTION')
let funcao = (x) => { return `O resultado de ${x}x5 = ${x*5} `}
console.log( funcao(5)  )
