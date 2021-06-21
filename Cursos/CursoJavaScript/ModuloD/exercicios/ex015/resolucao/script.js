/* O guanabara ensinou em aulas passadas que o addEventListener era a solução 
mais moderna para não poluir o HTML com funções JavaScript onmouseclick, over, etc. 
então adptei para ela: */
var btn = document.getElementById('btn')
btn.addEventListener('click', verificar)

/* Parte daptada para criar dinamicamente uma imagem vazia */
var imagem = document.createElement('img')
var resultado = document.querySelector('#resultado')
imagem.setAttribute('id', 'imagem') 
imagem.setAttribute('src', '../imagens/icon.png')
resultado.appendChild(imagem)

function verificar(){

    // alert('Funcionou')
    var anoAtual = new Date().getFullYear()
    var inputNascimento = document.getElementById('txtano').value

    if(inputNascimento.lenght == 0 || inputNascimento > anoAtual || inputNascimento < 1900){
        resultado.innerText = "Verifique os dados e preencha corretamente"
    }else{
        var sexo = document.getElementsByName('sexo')
        var idade = anoAtual - Number(inputNascimento)

        var mensagem = document.getElementById('mensagem')
        var imagem = document.getElementById('imagem') // imagem que foi criada dinamicamente por JavaScript
        // resultado.innerText = `Idade: ${idade} anos`

        if(sexo[0].checked){
            sexo = 'Homem'
            if(idade >= 0 && idade <10){
                imagem.setAttribute('src', '../imagens/foto-bebe-m.png')
            }else if(idade < 21){
                imagem.setAttribute('src', '../imagens/foto-jovem-m.png')
            }else if(idade < 50){
                imagem.setAttribute('src', '../imagens/foto-adulto-m.png')
            }else{
                imagem.setAttribute('src', '../imagens/foto-idoso-m.png')
            }
        }else{
            sexo = 'Mulher'
            if(idade >= 0 && idade <10){
                imagem.setAttribute('src', '../imagens/foto-bebe-f.png')
            }else if(idade < 21){
                imagem.setAttribute('src', '../imagens/foto-jovem-f.png')
            }else if(idade < 50){
                imagem.setAttribute('src', '../imagens/foto-adulto-f.png')
            }else{
                imagem.setAttribute('src', '../imagens/foto-idoso-f.png')
            }
        }
        mensagem.innerText = `${sexo} com ${idade} anos`
        mensagem.style.textAlign = "center"
    }
}