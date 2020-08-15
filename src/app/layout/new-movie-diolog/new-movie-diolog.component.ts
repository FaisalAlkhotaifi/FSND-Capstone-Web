import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { MovieService, Movie, MovieDetails } from 'src/app/services/movie.service'
import { ActorService } from 'src/app/services/actor.service';
import { MovieCategoryService, Category } from 'src/app/services/movie-category.service';

@Component({
  selector: 'app-new-movie-diolog',
  templateUrl: './new-movie-diolog.component.html',
  styleUrls: ['./new-movie-diolog.component.css']
})
export class NewMovieDiologComponent implements OnInit {
  categoryControl = new FormControl();
  categoryObject = Object;

  actorsControl = new FormControl();
  actorObject = Object;

  constructor(
    private dialogRef: MatDialogRef<NewMovieDiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,
    public actorService: ActorService,
    public categoryService: MovieCategoryService,
    private fb: FormBuilder
  ) { 

  }

  ngOnInit(): void {
    this.actorService.get();
    this.categoryService.get();

    const initialCategory = this.data.category.id >= 0 ? this.data.category : null;
    const initialActor = this.data.actors.length > 0 ? this.data.actors : null;

    this.categoryControl.setValue(initialCategory);
    this.actorsControl.setValue(initialActor);
  }

  compareCategoryByValue(value1: any, value2: any) { 
    return value1 && value2 && value1.id === value2.id; 
  }

  compareActorByValue(value1: any, value2: any) { 
    return value1 && value2 && value1.id === value2.id; 
  }

  onSave() {
    this.data.category = this.categoryControl.value;
    this.data.actors = this.actorsControl.value;
    
    this.dialogRef.close(this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
