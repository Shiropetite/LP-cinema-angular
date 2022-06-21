import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '../model/Film';
import { FilmService } from './../service/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.scss']
})
export class AddOrEditFilmComponent implements OnInit {
  haveSubmitOnce: boolean = false;
  edit: boolean = false;
  filmForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    synopsis: new FormControl(),
    rating: new FormControl()
  })

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      const film = this.filmService.getFilm(id);
      if(film) {
        this.filmForm.setValue({ title: film.title, synopsis: film.synopsis, rating: film.rating });
        this.edit = true;
      }
    }
  }

  updateRating(newRate: number): void {
    this.filmForm.controls.rating.setValue(newRate);
  }

  submit(): void {
    this.haveSubmitOnce = true;
    if(this.filmForm.status === 'VALID') {
      const filmId = this.route.snapshot.paramMap.get('id');
      if(filmId) {
        this.filmService.updateFilm({
          id: filmId,
          title: this.filmForm.value.title ?? '',
          synopsis: this.filmForm.value.synopsis,
          rating: this.filmForm.value.rating
        });
        this.router.navigate([`/films/${filmId}`]);
      }
      else {
        this.filmService.addFilm(this.filmForm.value as Film);
        this.router.navigate(['/']);
      }

    }
  }

}
