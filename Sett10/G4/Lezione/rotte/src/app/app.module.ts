import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router'; // Import necessari per creare il routing

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { PrimaComponent } from './component/prima/prima.component';
import { SecondaComponent } from './component/seconda/seconda.component';
import { Seconda1Component } from './component/seconda1/seconda1.component';
import { Seconda2Component } from './component/seconda2/seconda2.component';
import { NipoteComponent } from './component/nipote/nipote.component';

// Costante di gestione delle rotte
const rotte: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'prima',
        component: PrimaComponent
    },
    {
        path: 'seconda',
        component: SecondaComponent,
        children: [
            {
                path: 'seconda1',
                component: Seconda1Component
            },
            {
                path: 'seconda2',
                component: Seconda2Component,
                children: [
                    {
                        path: 'nipote',
                        component: NipoteComponent
                    }
                ]
            }
        ]
    },
]

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        PrimaComponent,
        SecondaComponent,
        Seconda1Component,
        Seconda2Component,
        NipoteComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rotte) // Import del router module con indicazione del sistema di gestione delle rotte
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
