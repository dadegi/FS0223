import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies.interface';
import { MoviesService } from '../movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
    movies: Movies[] = [];

    constructor(private movieSrv: MoviesService) {
    }

    ngOnInit(): void {
        this.movieSrv.recuperaFilm().subscribe((films: Movies[]) => {
            this.movies = films;
            console.log(this.movies);
        });
    }
}
