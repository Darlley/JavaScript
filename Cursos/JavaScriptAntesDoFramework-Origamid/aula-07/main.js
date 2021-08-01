



async function fetchProdutos(url){
    const response = await fetch(url);
    const jsonBody = await response.json();
    console.log(jsonBody)
    return jsonBody
}

const requisicao = fetchProdutos("https://ranekapi.origamid.dev/json/api/produto")
console.log(requisicao)