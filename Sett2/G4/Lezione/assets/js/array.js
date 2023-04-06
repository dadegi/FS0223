var mioArray = [2, 4, 7, 5, 1];

document.getElementById('array').innerHTML += mioArray;

function calcolo(valore) {
    return valore + 4;
}

mioArray.forEach(function (numero) {
    document.getElementById('foreach').innerHTML += calcolo(numero) + ' - ';
});

nuovoArray = mioArray.map(calcolo);

nuovoArray.push(12);

document.getElementById('map').innerHTML += nuovoArray;

function filtra(valore) {
    return valore > 7;
}

document.getElementById('filter').innerHTML += nuovoArray.filter(filtra);

document.getElementById('reduce').innerHTML += nuovoArray.reduce(function (
    totale,
    valore
) {
    return totale * valore;
});
