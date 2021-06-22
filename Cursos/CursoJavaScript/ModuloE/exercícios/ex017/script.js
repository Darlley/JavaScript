let btn = document.getElementById('btn').addEventListener('click', gerar)

function gerar(){
    let numero = document.querySelector('input#numero').value
    var mensagem = document.querySelector('p#mensagem')
    if(numero.length == 0){
        mensagem.innerHTML = "Resultado da tabela: <strong>insira um valor!</strong>"
    }else if(numero < 1){
        mensagem.innerHTML = "Resultado da tabela: <strong>insira um valor maior que 0.</strong>"
    }else{
        var resultado = document.querySelector('p#resultado')

        for(var i=1; i<=10; i++){
            resultado.innerHTML += `${numero}x${i} = ${numero*i} <br>`
        }

        resultado.style.background = '#004b03'
        resultado.style.width = '90px'
        resultado.style.padding = '10px'
        resultado.style.borderRadius = '5px'

    }
}