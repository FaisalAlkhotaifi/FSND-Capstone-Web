import { Component, OnInit } from '@angular/core';
import { NewMovieDiologComponent } from '../../layout/new-movie-diolog/new-movie-diolog.component';
import { ComformationDiologComponent } from '../../layout/comformation-diolog/comformation-diolog.component'; 

import { MatDialog } from '@angular/material/dialog';

import { MovieService, Movie } from 'src/app/services/movie.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  Object = Object;

  constructor(
    private dialog: MatDialog,
    public movieService: MovieService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.movieService.get();
  }

  openForm(movie: Movie = null) {
    let movieData: Movie;
    if (!movie) {
      movieData = {
        details: {
          id: -1,
          name: '',
          description: ''
        },
        category: {
          id: -1,
          name: ''
        },
        actors: []
      };
    } else {
      movieData = movie;
    }

    const dialogRef = this.dialog.open(
      NewMovieDiologComponent, 
      {
        width: '40%',
        data: {
          details: {
            id: movieData.details.id,
            name: movieData.details.name,
            description: movieData.details.description
          },
          category: {
            id: movieData.category.id,
            name: movieData.category.name
          },
          actors: movieData.actors
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.movieService.save(result);
      }
    });
  }

  onDelete(movie: Movie) {
    const dialogRef = this.dialog.open(
      ComformationDiologComponent, 
      { 
        data: {
          message: "Are you sure you want to delete category?"
        } 
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.movieService.delete(movie);
      }
    });
  }
}
