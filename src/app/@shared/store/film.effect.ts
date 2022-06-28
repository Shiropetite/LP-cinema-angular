import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { FilmService } from '@shared/service/film.service';
import { loadFilms, loadFilmsSuccess } from './film.actions';

@Injectable()
export class FilmEffects {

  constructor(
    private actions$: Actions,
    private filmService: FilmService
  ) {}

  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadFilms),
      switchMap(() =>
        this.filmService.getAllFilm().pipe(map(films => loadFilmsSuccess({films: films}))
      )
    )
  ))


}
