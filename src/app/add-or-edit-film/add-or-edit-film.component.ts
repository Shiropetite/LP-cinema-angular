import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Film } from '@shared/model/Film';
import { FilmService } from '@shared/service/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.scss']
})
export class AddOrEditFilmComponent implements OnInit {
  haveSubmitOnce: boolean = false;
  edit: boolean = false;

  filmForm = new FormGroup({
    id: new FormControl(),
    title: new FormControl('', [
      Validators.required
    ]),
    releaseDate: new FormControl('', [
      Validators.required
    ]),
    synopsis: new FormControl(),
    rating: new FormControl()
  })

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.filmService.getFilm(Number.parseInt(id)).subscribe((film: Film) => {
        this.filmForm.setValue(film);
        this.edit = true;
      });
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
        this.filmService.updateFilm(this.filmForm.value as Film).subscribe(() => {
          this.router.navigate([`/films/${filmId}`]);
        })
      }
      else {
        this.filmService.addFilm(this.filmForm.value as Film).subscribe(() => {
          this.router.navigate(['/']);
        });
      }

    }
  }

}
