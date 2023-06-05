import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
    providedIn: 'root',
})
export class UsersService {

    users: User[] = [
        {
            name: 'Dario',
            surname: 'Del Giudice',
            email: 'dadegi@gmail.com',
            id: 1
        },
        {
            name: 'Mario',
            surname: 'Rossi',
            email: 'mario@rossi.com',
            id: 2
        },
        {
            name: 'Anna',
            surname: 'Bianchi',
            email: 'anna@bianchi.com',
            id: 3
        }
    ]

    constructor() {}

    getUsers() {
        return this.users;
    }

    getUser (id: number) {
        return this.users.find(user => user.id == id);
    }
}
