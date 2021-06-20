var dia = new Date()
dia = dia.getDay()

switch(dia){
    case 0: 
        console.log(`${dia} - Domingo`)
        break
    case 1: 
        console.log(`${dia} - Segunda`)
        break
    case 2: 
        console.log(`${dia} - Terça`)
        break
    case 3: 
        console.log(`${dia} - Quarta`)
        break
    case 4: 
        console.log(`${dia} - Quinta`)
        break
    case 5: 
        console.log(`${dia} - Sexta`)
        break
    default: 
        console.log("[ERRO] Data invalida. Verifique seu código!")
}