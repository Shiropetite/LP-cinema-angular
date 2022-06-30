import { createReducer, on } from '@ngrx/store';
import { Film } from '@shared/model/Film';
import { loadFilmsSuccess, addFilmSuccess, updateFilmSuccess, deleteFilmSuccess } from './film.actions';

const initialState: Film[] = [];

export const filmReducer = createReducer(
  initialState,
  on(loadFilmsSuccess, (_, { films }) => ([ ...films ])),
  on(addFilmSuccess, (state, { film } ) => ([ ...state, film ])),
  on(updateFilmSuccess, (state, { film }) => {
    const filmList = [...state];

    for(let i = 0; i < filmList.length; i++) {
      if(filmList[i].id === film.id) filmList[i] = film;
    }

    return filmList;
  }),
  on(deleteFilmSuccess, (state, { id }) => state.filter(film => film.id !== id))
);
