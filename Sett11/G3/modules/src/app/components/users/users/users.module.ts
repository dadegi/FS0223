import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from 'src/app/service/users.service';
import { UsersComponent } from '../users.component';

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        CommonModule, UsersRoutingModule
    ],
    providers: [
        UsersService
    ]
})
export class UsersModule {}
