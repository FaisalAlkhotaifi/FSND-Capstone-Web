import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Actor } from './actor.service';
import { Category } from './movie-category.service'
import { AuthService } from './auth.service';

export interface MovieDetails {
  id: number,
  name: string,
  description: string 
}

export interface Movie {
  details: MovieDetails,
  category: Category,
  actors: Array<Actor>
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = environment.apiServerUrl;
  public items: {[key: number]: Movie} = {};

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  get() {
    this.http.get(this.url + '/movie', this.getHeaders())
      .subscribe((res: any) => {
        this.moviesToItems(res.movies);
      });
  }

  save(movie: Movie) {
    const movie_formatted = this.getMovieformatted(movie);
    console.log(movie_formatted)
    if (movie_formatted.id >= 0){ // PATCH
      this.http.patch(this.url + '/movie/' + movie_formatted.id, movie_formatted, this.getHeaders())
        .subscribe((res: any) => {
          console.log(res);
          if (res.success) {
            this.movieToItem(res.movie);
          }
        });
    } else { // INSERT
      this.http.post(this.url + '/movie', movie_formatted, this.getHeaders())
        .subscribe((res: any) => {
          console.log(res);
          if (res.success) {
            this.movieToItem(res.movie);
          }
        });
    }
  }

  delete(movie: Movie) {
    const movie_formatted = this.getMovieformatted(movie);
    this.http.delete(this.url + '/movie/' + movie_formatted.id, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.deleteMovieFromItems(res.deleted_id);
        }
      });
  }

  getMovieformatted(movie: Movie) {
    return {
      id: movie.details.id,
      name: movie.details.name,
      description: movie.details.description,
      movie_category_id: movie.category.id,
      actors_id: movie.actors.map(actor => actor.id)
    };
  }

  moviesToItems(movies: Array<Movie>) {
    for (const movie of movies) {
      this.items[movie.details.id] = movie;
    }
  }

  movieToItem(movie: Movie) {
    this.items[movie.details.id] = movie;
  }

  deleteMovieFromItems(id: number) {
    delete this.items[id];
  }
}
