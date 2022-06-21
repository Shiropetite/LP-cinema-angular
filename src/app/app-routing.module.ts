import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MyFilmsComponent } from './my-films/my-films.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

const routes: Routes = [
  { path: '', component: MyFilmsComponent },
  { path: 'edit', component: AddOrEditFilmComponent },
  { path: 'edit/:id', component: AddOrEditFilmComponent },
  { path: 'films/:id', component: FilmDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
