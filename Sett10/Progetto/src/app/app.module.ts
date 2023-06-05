import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { CompletedComponent } from './components/completed/completed.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const rotte: Route[] = [
    {
        path: '',
        component: TodosComponent
    },
    {
        path: 'completed',
        component: CompletedComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        TodosComponent,
        CompletedComponent,
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(rotte)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
