/* 
 * AULA 18 (34) - ORGANIZAÇÃO BÁSICA DE UM CÓDIGO
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
 * AULA 19 (35) - EXECUTANDO JAVASCRIPT
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
 * AULA 20 (36) - COMENTÁRIOS DE CÓDIGO
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
 * AULA 21 (37) - O BÁSICO DE VAR, LET E CONST
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
 * AULA 22 (38) - TIPAGEM FRACA
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
 * AULA 22 (39) - TIPOS EM JAVASCRIPT: NUMBER
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
 * AULA 23 (40) - NUMBER: ALGUNS CUIDADOS
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
 * AULA 24 (41) - USANDO MATH
 * -----------------------------------------
 */ 
{
    // JavaScript tem clásses como Math para calculos matemáticos
    const raio = 5.6
    const area = Math.PI + Math.pow(raio, 2)
    // Math.PI é uma constante do número PI
    // Math.pow é um método para exponenciação/potenciação raio^2

    console.log(`Total: ${area} - "Math" é um ${typeof Math}`)
}

/*
 * AULA 42 - TIPOS EM JAVASCRIP: STRING
 * -----------------------------------------
 */ 
{
    // String é uma cadeia de caracteres delimitadas por: 
    // - "aspas duplas"
    // - 'aspas simples'
    // - ` crase` (Template String - executa trechos de códigos com ${})
    let index = 4
    let letra = '3'
    const escola = "Cod3r"
    console.log(`A String no index ${index} da palavra ${escola} é a letra: ${escola.charAt(index)}`)
    console.log(`O código da tabela unicode da string "${escola.charAt(index)}" é: ${escola.charCodeAt(3)}` )
    console.log(`O index da String "${letra}" na palavra "${escola}" é: ${escola.indexOf(letra)}`)

    // String a partir do index 1 - do index 0 ao 3
    console.log(`Strings a partir index 1-(${escola.substring(1)}) e entre 0-3-(${escola.substring(0, 3)})`) 

    const concatena = 'Escola '.concat(escola).concat("!") // concatenção de literais com variaveis
    // Literal são valores que não estão armazenados em uma variável
    console.log(concatena, typeof concatena) 

    console.log(`Substitua a string "3" por "e": ${escola.replace(3, 'e')}`)
    const geraArray = 'Ana, Maria, Pedro'.split(', ')
    console.log(typeof geraArray, geraArray)
}

/*
 * AULA 43 - USANDO TEMPLATE STRING
 * -----------------------------------------
 */ 
{
    // As concatenações de strings com + deixa o código estéticamente ilegivel
    // A partior do EscmaScript 2015 foi adicionado o Template String ``
    
    // Template Strings permite a quebra de linhas e o uso e manipulação de variáveis, expressões e métodos entre ${}
    // O código entre ${} é interpretado, isto é chamado de Interpolação
    const nome = 'Cod3r'
    console.log(`Curso: 
${nome}`)
}

/*
 * AULA 44 - TIPOS EM JAVASCRIPT: BOOLEAN
 * -----------------------------------------
 */ 
{
    let isAtivo = false;
    console.log(isAtivo)

    isAtivo = true
    console.log(isAtivo)

    isAtivo = 0
    console.log(!!isAtivo) // Negação da negação retorna o valor booleano original

    console.log(`\nValores com valor booleano verdadeiro:
num número (3 - ${!!3}),
um número negativo (-1 - ${!!-1}),
string com espaço (" " - ${!!" "}),
array ([] - ${!![]},
um objeto ({} - ${!!{}})),
ininito (infinity - ${!!Infinity}) `);

    console.log(`\nValores com valor booleano falso:
o 0 (${!!0}),\numa string vazia ("" - ${!!""}),
o null (${!!null}),
o Not a Number(NaN - ${!!NaN}),
o indefinido (undefined - ${!!undefined}) `)
}

/*
 * AULA 45 - TIPOS EM JAVASCRIPT: ARRAY
 * -----------------------------------------
 */
{
    // Aray é heterogêneo (aceitas mais de um tipo primitivo) mas o ideal é um array para cada tipo
    const valores = [7.7, 8.9, 6.3, 9.2]
    console.log(`
Arrays: posição 0 - ${valores[0]}, posição 3 - ${valores[3]}`)

    valores[4] = 10 // Posição 4 não existia, agora existe e armazena o valor 10
    console.log(`Novo array: ${valores}`)
    console.log(valores.length) // Tamanho do array

    valores.push({id: 3}, false, null, 'teste') // Metodo push adiciona novos elementos no fim do array
    console.log(valores)
    valores.pop() // exclui o ultimo elemento do array
    delete valores[0] // exclui o elemento da posição indicada 
    console.log(valores)
    console.log(typeof valores) // Um array é do tipo object
}

/*
 * AULA 46 - TIPOS EM JAVASCRIPT: OBJECT
 * -----------------------------------------
 */
{
    // Objeto javascript é diferente de um elemento Json (formato textual)
    // Notação literal de objetos.
    // Objeto vazio {}
    
    // 3 forma de criar propeidades dentro de objeto:
    
    // 1º - Os atributos podem ser criados dinamicamento:
    const prod1 = {}
    prod1.nome = 'Celular ultra Mega'
    // O objeto JavaScript é uma coleção de chave-valor (nome do atributo ou identificador e o valor)
    // você pode ter dentro de um objeto outros objetos
    prod1.preco = 4998.90
    
    // 2º -pode criar com espaços entre ['']
    prod1['Desconto Legal'] = 0.40 // Esta notação com espaços deve ser evitada
    console.log(`Prod 1 ${typeof prod1} - `, prod1)

    // 3º - os atributos podem ser criadas na declaração
    const prod2 = {
        nome: 'Camisa Polo',
        preco: 79.90
    }
    console.log(`Prod 2 ${typeof prod2} - `, prod2)
}

/*
 * AULA 47 - ENTENDENDO O NULL & UNDEFINED
 * -----------------------------------------
 */
{
    // Atribuição por valor X atribuição por referência

    // atribuição por referência:
    const a = {nome: 'Teste'}; // a armazena o endereço onde o objeto esta localizado na memória
    const b = a; // b armazena o mesmo endereço que a armazena
    // se eu mudar b, a também muda por que o que mudou foi o endereço em que os dois estão apontando
    b.nome = 'Teste 2'
    console.log(`a - `, a, `b - `, b)

    // atribuição por valor
    let c = 3 // valores primitivos são armazenas como uma cópia na variável e neste caso cada variavel armazena uma copia diferente
    let d = c
    d++
    console.log(`c - `,c, `d - `,d)

    // NULL *referência
    let valor // não há nenhum valor definido seu valor padrão é undefined
    console.log(valor)
    valor = null // significa ausência de valor, não há nenhum valor primitivo e nem uma referência de valor
    // a variavel com null passou de:
    // não inicializada -> inicializada
    console.log(valor)
    // console.log(valor.toString()) gera um erro
    
    // Sempre ao criar um variavel sem valor sempre inicialize ela com null, não é boa prática deixar variaveis undefined
    const produto = {}
    produto.preco = 3.50
    // produto.preco = undefined
    // nunca passe como valor o undefined, 
    produto.preco = null // para zerar explicitamente uma variável passe o null para excluir a vriavel explicitamente utilize o delete produto.preco
    console.log(!!produto.preco)
    console.log(produto)

}