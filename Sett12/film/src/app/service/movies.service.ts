import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    baseUrl = environment.baseURL;

    constructor(private http: HttpClient) {}

    recuperaFilm() {
        return this.http.get<Movie[]>(`${this.baseUrl}movies-popular`);
    }
}
