// var conferma = confirm('Sei sicuro di accettare \
// le condizioni di cui ai punti:\n1,\n2,\n3?');

// if (!conferma) {
// 	document.getElementById('scrivi4').innerHTML = 'Condizioni non accettate';
// } else {
//     document.getElementById('scrivi4').innerHTML = 'Condizioni accettate';
// }

// var approvazione = (conferma) ? 'Policy approvata' : 'Policy non approvata';

// document.getElementById('ternario').innerHTML = approvazione;

// Ricevere attraverso un form il nome e l'anno di nascita di una persona, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
COMPITI
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CON IL VALORE MEMORIZZATO DAL CAMPO ANNO, CALCOLARE L'ETÀ IN BASE ALL'ANNO IN CORSO
4. VERIFICARE LA MAGGIORE O MINORE ETÀ
5. SCRIVERE NELL'HTML
6. CANCELLARE IL FORM

EVENTO SCATENANTE (eventHandler)
click sul button

VARIABILI
GLOBALI: btn (const), età, stato
*/

const btn = document.getElementById('verifica');
var eta; // globale perché viene valorizzata al calcolo dell'età e utilizzata nella verifica e nella stampa
var stato; // globale perché viene valorizzata in fase di verifica e usata in stampa
var nome = document.getElementById('nome');
var anno = document.getElementById('anno');

btn.addEventListener('click', function () {
	calcolaEta(anno.value);
	verifica();
	scrivi(nome.value);
});

function calcolaEta(anno) {
	eta = 2023 - anno;
}

function verifica() {
	stato = (eta >= 18) ? 'maggiorenne' : 'minorenne';
}

function scrivi(nome) {
	document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
	document.getElementById('miaVerifica').innerHTML = 'La tua età è ' + eta + ' anni; sei ' + stato;
}

document.getElementById('cancella').addEventListener('click', function() {
    cancellaForm();
});

function cancellaForm() {
	nome.value = '';
	anno.value = '';
    document.getElementById('mioNome').innerHTML = '';
	document.getElementById('miaVerifica').innerHTML = '';
}
