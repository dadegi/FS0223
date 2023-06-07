import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

    users!: any[];

    constructor(private usersSrv: UsersService) {
        this.users = this.usersSrv.users;
    }

    ngOnInit(): void {}
}
