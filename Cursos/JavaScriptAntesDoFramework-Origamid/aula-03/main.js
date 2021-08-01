/*
 * com Arrays
 */
const frutas = ["banana", "maça"]
console.log(`Array: ${frutas}`)

const [fruta1, fruta2] = frutas 
console.log(fruta1, fruta2)

function handleMouseMove({clientX, clientY}){
    //const clientX = event.clientX;
    //const clientY = event.clientY;
    
    //const {clientX, clientY} = event
    console.log(clientX, clientY)
}

document.documentElement.addEventListener('mousemove', handleMouseMove)