
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Film } from '@shared/model/Film';

export const selectFilms = createSelector(
  createFeatureSelector('films'),
  (state: Film[]) => state
)
