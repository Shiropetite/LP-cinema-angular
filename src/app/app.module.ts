import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { RatingComponent } from './rating/rating.component';
import { EditRatingComponent } from './edit-rating/edit-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    AddOrEditFilmComponent,
    FilmDetailsComponent,
    MyFilmsComponent,
    RatingComponent,
    EditRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
