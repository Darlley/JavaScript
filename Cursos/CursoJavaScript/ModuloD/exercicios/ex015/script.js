var btn = document.querySelector('input#btn_form')
btn.addEventListener('click', calcular)

function calcular(){

    var idade = document.getElementById('idade').value
    idade = Number(idade)
    var masculino = document.getElementById('masculino').checked
    var feminino = document.getElementById('feminino').checked
    var imagem = document.getElementsByClassName('imagem')[0]

    idadeAtual = (2021-idade)

    if(masculino == true){
        if(idade < 1960){
            imagem.src = 'imagens/foto-idoso-m.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else if(idade >= 1960 && idade <= 1992){
            imagem.src = 'imagens/foto-adulto-m.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else if(idade > 1992 && idade <= 2013){
            imagem.src = 'imagens/foto-jovem-m.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else{
            imagem.src = 'imagens/foto-bebe-m.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }
    } else if(feminino == true){
        if(idade < 1960){
            imagem.src = 'imagens/foto-idoso-f.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else if(idade >= 1960 && idade <= 1992){
            imagem.src = 'imagens/foto-adulto-f.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else if(idade > 1992 && idade <= 2013){
            imagem.src = 'imagens/foto-jovem-f.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }else{
            imagem.src = 'imagens/foto-bebe-f.png'
            btn.value = `Você tem ${idadeAtual} anos!`
        }
    }else{
        btn.value = `Prencha corretamente!`
    }

    console.log(btn)
    console.log(idade)
    console.log(masculino)
    console.log(feminino)
    console.log(imagem)
}