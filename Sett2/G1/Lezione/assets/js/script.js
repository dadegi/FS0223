document.write('<h3>Dove sarà scritta questa frase?<?h3>'); // 9

document.getElementById('saluto').innerHTML = 'CIAO!'; // 3
document.getElementById('saluto2').innerHTML = 'Altro saluto'; // 4

// window.alert('Questo è un alert'); // 1
// alert(8 + 9); // 2

console.log('verifica in console'); // 5

var valore = 15; // 6
console.log(valore); // 7
console.log(valore + 3); // 8

// Commento a riga singola

/* Commento
a riga multipla */

numero = 5;
document.getElementById('numero').innerHTML = numero;
document.getElementById('somma').innerHTML = numero + 6;

var altroTesto = 'numero 5';
document.getElementById('altroTesto').innerHTML = altroTesto;

function riassegna() {
    altroTesto = 'Ho cambiato il valore della variabile';
    document.getElementById('altroTesto').innerHTML = altroTesto;
}

setTimeout(riassegna, 2000);

var nome;

if (nome === undefined) {
    document.getElementById('errore').innerHTML = 'La variabile è undefined';
} else {
    document.getElementById('errore').innerHTML = 'Il valore della variabile è ' + nome;
}

function clicca() {
    document.write('😛😛😛😛😛😛😛😛😛😛');
}