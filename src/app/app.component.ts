import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '@shared/model/Film';
import { loadFilms } from '@shared/store/film.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<{ movies: Film[] }>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFilms());
  }

}
