"use strict";
// Generalmente i metodi dichiarati ma non definiti vengono utilizzati con le classi astratte, le interfacce di colito vengono utilizzate come modelli per classi di dati
class Studenti {
    constructor(_studente, _tecnologia, _durata, _eta) {
        this.eta = 55; // Proprietà con un valore predefinito, modificabile in quanto nell'interfaccia è facoltativa
        this.studente = _studente;
        if (_eta) { // Se arriva un valore dall'istanza di classe, il valore predefinito sarà modificato col nuovo valore
            this.eta = _eta;
        }
        this.tecnologia = _tecnologia;
        this.durata = _durata;
    }
    getStudente() {
        return `Lo studente ${this.studente}, di anni ${this.eta}`;
    }
    getCorso() {
        return ` sta frequentando il corso di ${this.tecnologia} della durata di ${this.durata} mesi.`;
    }
    descrivi() {
        return this.getStudente() + this.getCorso();
    }
}
let nuovoStudente = new Studenti('Dario Del Giudice', 'Front-End', 3, 40);
console.log(nuovoStudente.descrivi());
