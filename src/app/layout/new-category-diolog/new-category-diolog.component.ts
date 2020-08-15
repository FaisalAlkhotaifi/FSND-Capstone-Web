import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MovieCategoryService, Category } from 'src/app/services/movie-category.service'

@Component({
  selector: 'app-new-category-diolog',
  templateUrl: './new-category-diolog.component.html',
  styleUrls: ['./new-category-diolog.component.css']
})
export class NewCategoryDiologComponent implements OnInit {
  
  constructor(
    private dialogRef: MatDialogRef<NewCategoryDiologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
