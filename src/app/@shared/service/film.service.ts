// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Models
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  baseUrl: string = "http://localhost:3000/movies";

  constructor(private http: HttpClient) { }

  getAllFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.baseUrl);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/${id}`);
  }

  addFilm(film: Film): Observable<Film> {
    return this.http.post<Film>(this.baseUrl, film);
  }

  updateFilm(updatedFilm: Film): Observable<Film> {
    return this.http.put<Film>(`${this.baseUrl}/${updatedFilm.id}`, updatedFilm);
  }

  deleteFilm(id: number): Observable<Film> {
    return this.http.delete<Film>(`${this.baseUrl}/${id}`);
  }

}
