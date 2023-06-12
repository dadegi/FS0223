import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Error404Component } from './components/error404/error404.component';
import { DetailsComponent } from './components/details/details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const rotte: Route[] = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            {
                path: 'details',
                component: DetailsComponent
            },
            {
                path: 'favorites',
                component: FavoritesComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '**',
        component: Error404Component
    }
]

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        ProfileComponent,
        NavbarComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        DetailsComponent,
        FavoritesComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(rotte)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
