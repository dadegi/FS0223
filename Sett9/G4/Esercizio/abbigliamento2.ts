class Abbigliamento {
	id: number;
	codprod: number;
	collezione: string;
	capo: string;
	modello: number;
	quantita: number;
	colore: string;
	prezzoivaesclusa: number;
	prezzoivainclusa: number;
	disponibile: string;
	saldo: number;

	constructor(
		id: number,
		codprod: number,
		collezione: string,
		capo: string,
		modello: number,
		quantita: number,
		colore: string,
		prezzoivaesclusa: number,
		prezzoivainclusa: number,
		disponibile: string,
		saldo: number
	) {
		this.id = id;
		this.codprod = codprod;
		this.collezione = collezione;
		this.capo = capo;
		this.modello = modello;
		this.quantita = quantita;
		this.colore = colore;
		this.prezzoivaesclusa = prezzoivaesclusa;
		this.prezzoivainclusa = prezzoivainclusa;
		this.disponibile = disponibile;
		this.saldo = saldo;
	}
	getsaldocapo(): number {
		return (this.prezzoivainclusa * this.saldo) / 100;
	}
	getacquistocapo(): number {
		return this.prezzoivainclusa - this.getsaldocapo();
	}
}

let newPrice: number;

async function recupera(): Promise<any> {
	//await fetch('https://61fb890c87801d0017a2c55c.mockapi.io/v1/metadata') // Json remoto
    await fetch('./Abbigliamento.json') // Json locale
		.then((response) => {
            if (response.ok) {
                return response.json();
            }
		})
		.then((data) => {
			data.forEach(element => {
				let capo = new Abbigliamento(
					element.id,
					element.codprod,
					element.collezione,
					element.capo,
					element.modello,
					element.quantita,
					element.colore,
					element.prezzoivaesclusa,
					element.prezzoivainclusa,
					element.disponibile,
					element.saldo
				);
				console.log(capo);
				newPrice = capo.getacquistocapo();
				console.log(newPrice);
			});
		});
}

recupera();
