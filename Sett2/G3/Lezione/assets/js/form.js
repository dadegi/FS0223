const nomeUtente = document.getElementById('nome');
const cognomeUtente = document.getElementById('cognome');
sendBtn = document.getElementById('invia');
var mioNome;
var mioCognome;

sendBtn.addEventListener('click', function () {
	if (controlla()) {
		conferma();
	}
});

function controlla() {
	mioNome = nomeUtente.value;
	mioCognome = cognomeUtente.value;
	if (mioNome == '') {
		alert('Inserire il nome utente');
		return false;
	} else if (mioCognome == '') {
		alert('Inserire il cognome utente');
		return false;
	} else {
		return true;
	}
}

function conferma() {
	document.getElementById(
		'conferma'
	).innerHTML = `Form inviato correttamente; dati inseriti:<br>Nome: ${mioNome} - Cognome: ${mioCognome}`;
    nomeUtente.value = '';
    cognomeUtente.value = '';
}
