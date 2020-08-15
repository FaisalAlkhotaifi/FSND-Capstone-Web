import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { ActorComponent } from './pages/actor/actor.component';
import { CategoriesComponent } from './pages/categories/categories.component';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'actors', component: ActorComponent},
  {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
