"use strict";
// Esempio di relazione di aggregazione
class TestFat {
    constructor(_ragSoc, _indirizzo, _pIva, _contatti, _righeFat, _totPrice) {
        this.ragSoc = _ragSoc;
        this.indirizzo = _indirizzo;
        this.pIva = _pIva;
        this.contatti = _contatti;
        this.righeFat = _righeFat;
        this.totPrice = _totPrice;
    }
}
let fattura1 = new TestFat('Azienda XYZ', 'via Tal Dei Tali 15 - 00100 Roma', '0122136585458', [
    {
        tel: '06235645',
        email: 'info@xyz.com'
    },
    {
        tel: '325458578',
        email: 'direzione@xyz.com'
    }
], [
    {
        codArt: 'A123',
        descrArt: 'primo articolo',
        qty: 3,
        unitPrice: 20
    },
    {
        codArt: 'B123',
        descrArt: 'secondo articolo',
        qty: 1,
        unitPrice: 50
    }
], 110);
console.log(fattura1);
