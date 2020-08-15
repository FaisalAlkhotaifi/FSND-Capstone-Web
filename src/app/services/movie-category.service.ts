import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

export interface Category {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class MovieCategoryService {
  url = environment.apiServerUrl;
  public items: {[key: number]: Category} = {};

  constructor(private auth: AuthService, private http: HttpClient) { }

  getHeaders() {
    const header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${this.auth.activeJWT()}`)
    };
    return header;
  }

  get() {
    this.http.get(this.url + '/movieCategory', this.getHeaders())
      .subscribe((res: any) => {
        this.categoriesToItems(res.movie_categories);
      });
  }

  save(category: Category) {
    if (category.id >= 0){ // PATCH
      this.http.patch(this.url + '/movieCategory/' + category.id, category, this.getHeaders())
        .subscribe((res: any) => {
          if (res.success) {
            this.categoryToItem(res.movie_category);
          }
        });
    } else { // INSERT
      this.http.post(this.url + '/movieCategory', category, this.getHeaders())
        .subscribe((res: any) => {
          if (res.success) {
            this.categoryToItem(res.movie_category);
          }
        });
    }
  }

  delete(category: Category) {
    this.http.delete(this.url + '/movieCategory/' + category.id, this.getHeaders())
      .subscribe( (res: any) => {
        if (res.success) {
          this.deleteCategoryFromItems(res.deleted_id);
        }
      });
  }

  categoriesToItems(categories: Array<Category>) {
    for (const category of categories) {
      this.items[category.id] = category;
    }
  }

  categoryToItem(category: Category) {
    this.items[category.id] = category;
  }

  deleteCategoryFromItems(id: number) {
    delete this.items[id];
  }
}
