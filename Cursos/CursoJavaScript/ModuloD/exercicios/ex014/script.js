function carregar(){
    var valor_resultado = window.document.getElementById('resultado')
    var imagem = window.document.getElementById('foto')
    var horario = new Date()

    horario = horario.getHours()
    
    /* valor_resultado.innerHTML = `Agora são ${horario} horas. Boa noite!` */
    
    if(horario >= 0 && horario <= 12){
        valor_resultado.innerHTML = `Agora são ${horario} horas. Bom dia!`
        imagem.src = "imagens/manha-full.jpg"
        window.document.body.style.backgroundColor = "#ddf2fd"
    }else if(horario > 12 && horario < 18){
        valor_resultado.innerHTML = `Agora são ${horario} horas. Bom tarde!`
        imagem.src = "imagens/tarde-full.jpg"
        window.document.body.style.backgroundColor = "#689cd8"
    }else{
        valor_resultado.innerHTML = `Agora são ${horario} horas. Boa noite!`
        imagem.src = "imagens/noite-full.jpg"
        window.document.body.style.backgroundColor = "#111419"
    }
}

