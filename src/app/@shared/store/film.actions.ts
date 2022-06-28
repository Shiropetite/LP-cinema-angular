import { createAction, props } from '@ngrx/store';
import { Film } from '@shared/model/Film';

export const loadFilms = createAction('[Movies] load');
export const loadFilmsSuccess = createAction('[Movies] load success', props<{films: Film[]}>());


