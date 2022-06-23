// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Film } from '../model/Film';

// Service
import { FilmService } from './../service/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  film?: Film

  constructor(private filmService: FilmService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.filmService.getFilm(Number.parseInt(id)).subscribe((film: Film) => { this.film = film });
    }
  }

  deleteFilm(): void {
    if(this.film) {
      this.filmService.deleteFilm(this.film.id).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }

}
