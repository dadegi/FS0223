var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
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
    getsaldocapo() {
        return (this.prezzoivainclusa * this.saldo) / 100;
    }
    getacquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
let newPrice;
function recupera() {
    return __awaiter(this, void 0, void 0, function* () {
        //await fetch('https://61fb890c87801d0017a2c55c.mockapi.io/v1/metadata') // Json remoto
        yield fetch('./Abbigliamento.json') // Json locale
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
            .then((data) => {
            data.forEach(element => {
                let capo = new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
                console.log(capo);
                newPrice = capo.getacquistocapo();
                console.log(newPrice);
            });
        });
    });
}
recupera();
