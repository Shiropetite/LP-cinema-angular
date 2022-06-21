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
      synopsis: "Neuf ans plus tôt, après les événements de Toy Story 2, La Bergère et Woody tentent de sauver la voiture télécommandée d'Andy, perdue pendant un orage. Alors que le sauvetage prend fin, La Bergère est donnée à un nouveau propriétaire. Woody veut d'abord partir avec elle puis décide finalement de rester avec Andy. Des années plus tard, Andy, devenu adolescent, donne tous ses jouets à Bonnie, encore jeune enfant, avant de partir à l'université. Bien que les jouets soient heureux d'avoir une nouvelle vie avec un nouvel enfant, Woody peine à s'adapter à un environnement dans lequel il n'est plus aussi aimé qu'avec Andy : Bonnie lui enlève régulièrement son étoile de shérif pour la donner à Jessie et le choisit rarement lorsqu'elle veut jouer. Alors que Bonnie s'apprête à passer son premier jour à l'école maternelle, Woody s'inquiète pour elle et se met dans son sac à dos. À l'école, Bonnie se retrouvant sans de quoi pouvoir faire un dessin à sa portée, Woody va chercher plusieurs matériaux dans la poubelle, dont une cuillère-fourchette, du fil cure-pipe et un bâtonnet de glace, que Bonnie utilise pour créer un nouveau jouet qu'elle prénomme Fourchette. Fourchette prend vie dans le sac à dos de Bonnie et fait une crise existentielle, pensant qu'il n'est composé que de déchets et qu'il n'est donc pas un jouet, et souhaite retourner dans une poubelle. Alors que Fourchette devient le jouet préféré de Bonnie, Woody se charge de l'empêcher de se jeter à la poubelle.",
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
