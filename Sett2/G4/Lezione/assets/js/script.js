var btnCalcola = document.getElementById('calcola');
var btnReset = document.getElementById('reset');
var operazione;
var numero1;
var numero2;
var risultato;
var semaforo = true;

window.addEventListener('load', init);

function init() {
	document.getElementById('risultato').innerHTML = '';
	eventHandler();
}

function eventHandler() {
	leggi();
}

function leggi() {
	btnCalcola.addEventListener('click', function () {
		operazione = document.getElementById('operazione').value;
		numero1 = document.getElementById('numero1').value;
		numero2 = document.getElementById('numero2').value;

		controlla();
        if (semaforo) {
            calcola();
        }
        if (semaforo) {
            scrivi();
            cancellaForm();
        } else {
            return;
        }
	});
}

function controlla() {
	if (operazione == '' || numero1 == '' || numero2 == '') {
		document.getElementById('risultato').innerHTML =
			"Attenzione! Compilare correttamente tutti i campi e scegliere un'operazione";
		semaforo = false;
	} else {
		semaforo = true;
	}
}

function calcola() {
	numero1 = Number(numero1);
	numero2 = Number(numero2);

	switch (operazione) {
		case 'add':
			risultato = numero1 + numero2;
			break;

		case 'sottr':
			risultato = numero1 - numero2;
			break;

		case 'molt':
			risultato = numero1 * numero2;
			break;

		case 'div':
			if (numero2 === 0) {
				document.getElementById('risultato').innerHTML =
					'Non è possibile effettuare una divisione per 0!';
                    semaforo = false;
				return;
			} else {
                semaforo = true;
				risultato = numero1 / numero2;
			}
			break;
	}
}

function scrivi() {
	switch (operazione) {
		case 'add':
			operazione = 'addizione';
			break;

		case 'sottr':
			operazione = 'sottrazione';
			break;

		case 'molt':
			operazione = 'moltiplicazione';
			break;

		case 'div':
			operazione = 'divisione';
			break;
	}
	document.getElementById(
		'risultato'
	).innerHTML = `Il risultato della ${operazione} tra ${numero1} e ${numero2} è ${risultato}`;
}

function cancellaForm() {
	btnReset.addEventListener('click', function () {
		document.getElementById('risultato').innerHTML = '';
	});
}
