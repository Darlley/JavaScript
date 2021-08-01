


// A função retorna uma promise (promessa) 
const requisicao = fetch("https://ranekapi.origamid.dev/json/api/produto")
    .then( response => {
        return response.json() 
    })
    .then(jsonBody => {
        document.querySelector('#app').innerHTML = jsonBody[0].nome;
        console.log(jsonBody)
    })

console.log(requisicao)