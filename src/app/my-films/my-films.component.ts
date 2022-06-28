import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '@shared/model/Film';
import { Observable } from 'rxjs';
import { selectFilms } from './../@shared/store/film.selectors';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {

  films: Observable<Film[]> = new Observable();

  constructor(private store: Store<{ movies: Film[] }>) { }

  ngOnInit(): void {
    this.films = this.store.select(selectFilms);
  }

}
