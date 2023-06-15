import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MoviesService } from 'src/app/service/movies.service';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/auth/auth.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { Favourite } from 'src/app/models/favourite.interface';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

    movies!: Movie[];
    imageURL = environment.imageURL;
    utente!: Auth | null;
    favoriti!: Favourite[];

    constructor(private movieSrv: MoviesService, private authSrv: AuthService) {
        this.authSrv.user$.subscribe((_utente) => {
            this.utente = _utente
        });
        setTimeout(() => {
            this.movieSrv.recuperaFilm().subscribe((films: Movie[]) => {
                this.movies = films;
            });
            if (this.utente) {
                this.movieSrv.recuperaFavoriti(this.utente.user.id).subscribe((likes: Favourite[]) => {
                    this.favoriti = likes;
                    console.log(this.favoriti);
                });
            }
        }, 1500);
    }

    ngOnInit(): void {}
}
