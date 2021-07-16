//My api key
var apiKey = {
    key: '8a8aba4e-d507-46b8-8c18-2449fd059121'
}


//Get Fetch Requisition
fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apiKey.key).then((response) => {
    if(!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
    return response.json();
}).then((api) => {

    var texto ="";

    for(let i=0; i<10; i++){

        texto = texto + `
            <div class="media">
                <img src="./img/coins.jpeg" class="align-self-center mr-3" alt="coin" with="100" height="60">
                <div class="media-body">        
                    <h5 class="mt-2">${api.data[i].name}</h5>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>`;

        document.getElementById("coins").innerHTML = texto;
    }
})

