import { Component, OnInit } from '@angular/core';
import { Film } from '../model/Film';
import { FilmService } from './../service/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {

  films: Film[] = []

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getAllFilm().subscribe((films: Film[]) => { this.films = films });
  }

}
