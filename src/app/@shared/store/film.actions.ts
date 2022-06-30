import { createAction, props } from '@ngrx/store';
import { Film } from '@shared/model/Film';

export const loadFilms = createAction('[Movies] load');
export const loadFilmsSuccess = createAction('[Movies] load success', props<{ films: Film[] }>());

export const addFilm = createAction('[Movies] add', props<{ film: Film }>());
export const addFilmSuccess = createAction('[Movies] add success', props<{ film: Film }>());

export const updateFilm = createAction('[Movies] update', props<{ film: Film }>());
export const updateFilmSuccess = createAction('[Movies] update success', props<{ film: Film }>());

export const deleteFilm = createAction('[Movies] delete', props<{ id: number }>());
export const deleteFilmSuccess = createAction('[Movies] delete success', props<{ id: number }>());
