import { Injectable } from '@angular/core';
import { Film } from '../model/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  nextFilmId: number = 3
  films: Film[] = [
    {
      id: '1',
      title: 'Toy story 4',
      synopsis: "Woody a toujours privilégié la joie et le bien-être de ses jeunes propriétaires – Andy puis Bonnie – et de ses compagnons, n’hésitant pas à prendre tous les risques pour eux, aussi inconsidérés soient-ils. L’arrivée de Fourchette un nouveau jouet qui ne veut pas en être un dans la chambre de Bonnie met toute la petite bande en émoi. C’est le début d’une grande aventure et d’un extraordinaire voyage pour Woody et ses amis. Le cowboy va découvrir à quel point le monde peut être vaste pour un jouet…",
      rating: 3
    },
    {
      id: '2',
      title: 'Alerte rouge',
      synopsis: 'Les aventures de Meilin Lee, une jeune adolescente de 13 ans, pleine d’assurance, mais tiraillée entre son image de petite fille modèle aux yeux de sa mère hyper protectrice et le chaos de l’adolescence. Et comme si tous les changements qui s’opèrent en elle ne suffisaient pas, chaque fois qu’elle est débordée par ses émotions - ce qui, pour une ado, arrive quasiment tout le temps - elle se transforme en panda roux géant !',
      rating: null
    }
  ];

  constructor() { }

  getAllFilm(): Film[] {
    return this.films;
  }

  getFilm(id: string): Film | undefined {
    return this.films.find((f: Film) => f.id === id);
  }

  updateFilm(updatedFilm: Film): void {
    for(let i = 0; i < this.films.length; i++) {
      if(this.films[i].id === updatedFilm.id) {
        this.films[i] = updatedFilm;
      }
    }
  }

  addFilm(film: Film): void {
    film.id = `${this.nextFilmId++}`;
    this.films.push(film);
  }

}
