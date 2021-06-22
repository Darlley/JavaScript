var btn = document.querySelector('input[type="button"]').addEventListener('click', calcular)

function calcular(){
    var numero_inicial = document.getElementById('inicio').value
    var numero_final = document.getElementById('fim').value
    var numero_condicional = document.getElementById('passo').value
    
    
    var resultado = document.getElementById('resultado')

    if(numero_inicial.lenght == 0 || numero_final.lenght == 0 || numero_condicional.lenght == 0 || numero_condicional == 0){
        resultado.innerText = 'Preencha todos os dados corretamente e com "passo" maior que 0.'
    }else{
        let ni = Number(numero_inicial)
        let nf = Number(numero_final)
        let nc = Number(numero_condicional)

        let texto = '\u{2714} Resultado: '

        if(ni <= nf){
            for(var i = ni; ni<=nf; ni += nc){
                texto += " \u{1F449} " + ni
            }
        }else{
            for(var i = ni; ni>=nf; ni -= nc){
                texto += " \u{1F449} " + ni
            }
        }
        resultado.innerHTML = texto + " \u{1F3C1}"
    }
}