"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(costruttore) {
    console.log('Logging...'); // 6 - Primo console.log
    console.log(costruttore); // 7 - Secondo console.log, che riceve come parametro il constructor della classe, lo stampa, poi esegue l'istanza della classe
}
let Persona = class Persona {
    constructor(_name) {
        this.name = _name;
        console.log('Creazione persona'); // 8 - L'istanza di classe esegue il metodo del costruttore, ed è il terzo concole.log
    }
};
Persona = __decorate([
    Logger // 4 - Decoratore collegato alla funzione col suo nome
], Persona);
const persone = new Persona('Mario'); // 2 - Istanza di classe
console.log(persone); // 1 - Chiamata all'istanza di classe / 9 - stampa della proprietà di classe
