let array_total = []

//select
let create_select = document.createElement('select')
create_select.setAttribute('name', 'valores')
create_select.setAttribute('id', 'valores')
create_select.setAttribute('multiple', '')

let mensagem_erro = document.querySelector('span#mensagem')

// PRIMEIRO EVENTO (ADICIONAR VALORES)
let add_btn = document.querySelectorAll('input[type="button"]')[0]
add_btn.addEventListener('click', function (){

    let valor = document.querySelector('input[type="number"]').value
    
    if(valor.length == 0 || Number(valor) > 100 || Number(valor) < 1 || array_total.indexOf(Number(valor)) != -1){
         if(valor.length == 0){
            mensagem_erro.innerText = 'Informe um valor!!!'
         }else if(array_total.indexOf(Number(valor)) != -1){
            mensagem_erro.innerText = `O valor ${valor} ja existe!!!`
         }else{
            mensagem_erro.innerText = 'Informe um valor entre 1 e 100!!!'
         }
    }else{
        valor = Number(valor) // console.log(typeof valor) = number
        array_total.push(valor) //console.log(array_total)
        mensagem_erro.innerText = ''

        //option
        let create_option = document.createElement('option') // criar TAG option
        create_option.setAttribute('value', valor) // atributo de valor
        create_option.innerHTML = `Valor ${valor} selecionado` // texto do valor

        create_select.appendChild(create_option) // adicionar tag option dentro da select
            
        let create_retorno = document.querySelector('div#container-select') // selecionar div da select
        create_retorno.appendChild(create_select) // adicionar tag select dentro da div
    }

})

// SEGUNDO EVENTO (MOSTRAR RESULTADO)
let final_btn = document.querySelectorAll('input[type="button"]')[1]
final_btn.addEventListener('click', function (){
    if(array_total==0){
        mensagem_erro.innerText = "Informe um valor!!!"
    }else{
        mensagem_erro.innerText = ''
        array_total.sort()
        let resultado = document.querySelector('p#resultado')
        resultado.innerText += `Ao todo, temos ${array_total.length} números cadastrados: [${array_total}]`
        
        // tratamento de valores
        let maior = array_total[0]
        let menor = array_total[0]
        let soma = 0

        for(let i=0; i<=array_total.length; i++){
                soma = soma+array_total.length[i]
            if(array_total[i+1] > array_total[i]){ // maior
                maior=array_total[i+1]
            } else if(array_total[i+1] < array_total[i]){ // menor
                menor=array_total[i+1]
            }
        }
        
        resultado.innerText += `\n O maior valor informado foi ${maior}`
        resultado.innerText += `\n O menor valor informado foi ${menor}`
        resultado.innerText += `\n Somando todos os valores temos ${soma}`
        resultado.innerText += `\n A média dos valores digitados é ${soma}/${array_total.length}=${soma/array_total.length}`
    }
})