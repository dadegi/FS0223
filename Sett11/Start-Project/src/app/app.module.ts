import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

const rotte: Route[] = [
    {
        path: 'movies',
        component: MoviesComponent
    }
]

@NgModule({
    declarations: [AppComponent, MoviesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(rotte)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
