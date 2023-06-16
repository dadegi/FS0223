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

    constructor(
        private movieSrv: MoviesService,
        private authSrv: AuthService
    ) {}

    ngOnInit(): void {
        this.authSrv.user$.subscribe((_utente) => {
            this.utente = _utente;
        });
        setTimeout(() => {
            this.recuperaFavoriti(this.utente!.user.id);
            this.recuperaFilm();
        }, 1500);
    }

    recuperaFilm(): void {
        this.movieSrv.recuperaFilm().subscribe((films: Movie[]) => {
            this.movies = films;
        });
    }

    recuperaFavoriti(userId: number): void {
        this.movieSrv
            .recuperaFavoriti(userId)
            .subscribe((likes: Favourite[]) => {
                this.favoriti = likes;
            });
    }

    aggiungiFavorito(idFilm: number): void {
        const favorito: Favourite = {
            userId: this.utente!.user.id,
            movieId: idFilm,
        };

        this.movieSrv.aggiungiFavorito(favorito).subscribe(() => {
            this.recuperaFavoriti(this.utente!.user.id);
        });
    }

    eliminaFavorito(filmId: number): void {
        const idFav = this.getIdFavorito(filmId);
        if (idFav) {
            this.movieSrv.rimuoviFavorito(idFav).subscribe(() => {
                this.recuperaFavoriti(this.utente!.user.id);
            });
        }
    }

    isFavorito(filmId: number): boolean {
        return this.favoriti.some((f) => f.movieId === filmId);
    }

    getIdFavorito(filmId: number): number | undefined {
        const favorito = this.favoriti.find((f) => f.movieId === filmId);
        return favorito?.id;
    }
}
