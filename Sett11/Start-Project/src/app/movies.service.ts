import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies } from './movies.interface';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    movies: Movies[] = [];

    constructor(private http: HttpClient) {}

    recuperaFilm() {
        return this.http.get<Movies[]>('http://localhost:4201/api/movie/popular');
    }

}
