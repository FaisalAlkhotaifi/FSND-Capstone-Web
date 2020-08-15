import { Component, OnInit } from '@angular/core';
import { NewCategoryDiologComponent } from '../../layout/new-category-diolog/new-category-diolog.component';
import { ComformationDiologComponent } from '../../layout/comformation-diolog/comformation-diolog.component'; 

import { MatDialog } from '@angular/material/dialog';

import { MovieCategoryService, Category } from '../../services/movie-category.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  Object = Object;

  constructor(
    private dialog: MatDialog,
    public categoryService: MovieCategoryService,
    public auth: AuthService
    ) { }

  ngOnInit(): void {
    this.categoryService.get();
  }

  openForm(category: Category = null) {
    let categoryData: Category;
    if (!category) {
      categoryData = {
        id: -1,
        name: ''
      };
    } else {
      categoryData = category;
    }

    const dialogRef = this.dialog.open(
      NewCategoryDiologComponent, 
      {
        data: {
          id: categoryData.id,
          name: categoryData.name
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.categoryService.save(result);
      }
    });
  }

  onDelete(category: Category) {
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
        this.categoryService.delete(category);
      }
    });
  }
}
