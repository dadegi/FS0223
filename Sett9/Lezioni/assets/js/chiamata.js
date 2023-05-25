let headersList = {
	Accept: "*/*",
	"User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

let response = fetch("https://61fb890c87801d0017a2c55c.mockapi.io/v1/metadata/", {
	method: "GET",
	headers: headersList,
}).then((response) => {
    return response.json();
}).then((data) => {
    elenco = data;
    console.log(elenco);
})

// let data = response.text;
// console.log(data);
