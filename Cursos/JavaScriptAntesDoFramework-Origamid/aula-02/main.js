const nomeProprio = 'dArlley'
// função vanilla

/*
 * Função pura
 */
// function upperName(nome){
//    return nome.toUpperCase(nome)
// }

/*
 * função "expressão"
 */
// const upperName = function(nome){
//     return nome.toUpperCase(nome)
// }

/*
 * PRIMEIRA Arrow Function
 */
// const upperName = (nome) => {
//    return nome.toUpperCase(nome)
// }

/*
 * SEGUNDA Arrow Function
 */
const upperName = nome => nome.toUpperCase(nome);
const countLetters = word => word.length;

console.log( `'${ upperName(nomeProprio) }' tem: ${ countLetters(nomeProprio) } letras.`)


/*
 * SEGUNDA PARTE - this
 */
console.log('========= THIS')

class Menu{
    constructor(menu){
        this.menuElement = document.querySelector(menu)
        this.activeClass = 'active'
    }
    addActiveEvent(){
        // this.menuElement.addEventListener("click", function (event){
            //    event.target.classList.add(this.activeClass);
            // }); // SEM ARROW FUNCTION CRIA UM NOVO "THIS" QUE GERA ERROS
            
            this.menuElement.addEventListener(
                "click", event => event.target.classList.add(this.activeClass),
                console.log(this)
        ); // Arrow Function não cria um novo "this"
    }
}

const menu = new Menu('.principal')
menu.addActiveEvent()

console.log(menu)