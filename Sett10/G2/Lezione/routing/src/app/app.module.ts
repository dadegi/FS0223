import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimoComponent } from './components/primo/primo.component';
import { SecondoComponent } from './components/secondo/secondo.component';
import { TerzoComponent } from './components/terzo/terzo.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'primo',
        component: PrimoComponent
    },
    {
        path: 'secondo',
        component: SecondoComponent
    },
    {
        path: 'terzo',
        component: TerzoComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PrimoComponent,
        SecondoComponent,
        TerzoComponent,
        HomeComponent,
        HeaderComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
