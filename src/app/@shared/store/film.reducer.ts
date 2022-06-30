import { createReducer, on } from '@ngrx/store';
import { Film } from '@shared/model/Film';
import { loadFilmsSuccess, addFilmSuccess } from './film.actions';

const initialState: Film[] = [];

export const filmReducer = createReducer(
  initialState,
  on(loadFilmsSuccess, (_, { films }) => ([ ...films ])),
  on(addFilmSuccess, (state, { film } ) => ([ ...state, film ]))
);
