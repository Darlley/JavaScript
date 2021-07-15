/* 
 * AULA 18 - ORGANIZAÇÃO
 * -----------------------------------------
 */ 
{

    // A linguagem JavaScript é organizada por sentenças de código: 
    console.log('Sentença de código') // que pode ou não terminar com ;
    // Ou por blocos de código
    {
        {
            // Os blocos agrupam um conjunto de sentenças de código
            console.log('Ola'); // Sentença de código com ;
            console.log('Mundo!') // Sentença de código sem ;
        }
    } // bloco vazio e sem função
}

/* 
 * AULA 19 - EXECUTANDO JAVASCRIPT
 * -----------------------------------------
 */ 
{
    // Diferentes formas de executar código JavaScript: 
    //   - https://replit.com/
    //   - https://jsfiddle.net/
    //   - ChromeDevTools/Console (F12)
    //   - Terminal Node, VSCode
    //   - Plugins Code Runner (Ctrl +Alt + N) / Node.js Exec (F8)
}

/*
 * AULA 20 - COMENTÁRIOS DE CÓDIGO
 * -----------------------------------------
 */ 
{
    // Comentário de uma linha

    /* 
        Comentário
        de multiplas
        linhas 
    */

    /* 
    * Comentário de 
    * Multiplas linhas
    */

    // Os comentário podem ser adicionados antes, dentro ou depois de uma função
    // Eles devem ser relevantes e acrescentar informações sobre o código/função
}

/*
 * AULA 21 - O BÁSICO DE VAR, LET E CONST
 * -----------------------------------------
 */ 
{
    // O nome oficial do JavaScript é Ecma Script
    // Existem 3 formas de armazer valores em JavaScrip: var let e const 
    var a = 3 // os nomes das variáveis devem ser claros sobre a informação que contém (numero = 3)
    let b = 4 // regra geral é let, evite o var

    var a = 30 // JavaScript diferente das outras linguagem permite redeclarar variaveis
    // let b = 40 
    // O EcmaScript não permite a redeclaração de variáveis, a sentença acima retorna um erro
    
    a = 300
    b = 400

    const c = 5
    // c= 50    a const declara numeros constantes (a partir da declaração da constante o valor não muda)

    console.log(a, b, c)
    // "var", "let" e "cosnt" são palavras reservadas: não podem ser usadas para nomes de variaveis (var let = 'valor')
}

/*
 * AULA 22 - TIPAGEM FRACA
 * -----------------------------------------
 */ 
{
    // O JavaScript é fracamente tipado, de tipagem dinamica
    // Os tipos de valores podem ser alterados texto -> numero inteiro -> numero real
    let qualquer = 'Palavra'
    console.log(typeof qualquer, qualquer)
    qualquer = 3.1516
    console.log(typeof qualquer, qualquer)

    // Evite escolher nomes genéricos ou siglas para nomes de variáveis ("valor", "numero", "pqp")
    // prefira código claro a comentário de código: let pqp = false // produto quimico perigoso... kkk
}

/*
 * AULA 22 - TIPOS EM JAVASCRIPT: NUMBER
 * -----------------------------------------
 */ 
{
    // O numberé um tipo primitivo no JavaScript
    const peso1 = 1.0
    const peso2 = Number('2.0')
    console.log('Peso 1 = ' + peso1 + ' / Peso 2 = ' + peso2)
    console.log(Number.isInteger(peso1)) // Valor inteiro? true

    const avaliacao1 = 9.871
    const avaliacao2 = 6.871

    const total = avaliacao1 * peso1 + avaliacao2 * peso2
    const media = total / (peso1 + peso2)

    console.log('Média: ' + media.toFixed(2) + ' - ' + (typeof media.toFixed(2)))
    console.log('Média: ' + media.toString(2) + ' - ' + (typeof media.toString(2)))
}

/*
 * AULA 23 - NUMBER: ALGUNS CUIDADOS
 * -----------------------------------------
 */ 
{
    // Pelo fato de a linguagem JavaScript ser fracamente tipada ocorre muitas anomalias:
    console.log(7 / 0) // Infinity
    console.log("10" / 2) // Uma String pode ser convertida em tipo numérico para realizar operações aritméticas
    console.log("Show" * 2) // Diferente de algumas linguagens a String não érepetida 2 vezes
    console.log(0.1 + 0.7) // A especificação para retornar um numero flutuante correto seria mais lento que o JS suporta
    console.log( typeof (10).toString() ) // É possível manipular "literais" diretamente, desde que com parenteses
}

/*
 * AULA 24 - USANDO MATH
 * -----------------------------------------
 */ 