import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    users: any = [
        {
            nome: 'Mario',
            cognome: 'Rossi'
        },
        {
            nome: 'Aldo',
            cognome: 'Bianchi'
        },
        {
            nome: 'Anna',
            cognome: 'Verdi'
        },
        {
            nome: 'Maria',
            cognome: 'Neri'
        }
    ]

    constructor() {}
}
