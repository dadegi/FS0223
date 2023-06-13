import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

    movies!: Movie[];
    imageURL = environment.imageURL;

    constructor(private movieSrv: MoviesService) {
        setTimeout(() => {
            this.movieSrv.recuperaFilm().subscribe((films: Movie[]) => {
                this.movies = films;
            });
        }, 1500);
    }

    ngOnInit(): void {}
}
