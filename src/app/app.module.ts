import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorComponent } from './pages/actor/actor.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HeaderComponent } from './layout/header/header.component';
import { ComformationDiologComponent } from './layout/comformation-diolog/comformation-diolog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { NewMovieDiologComponent } from './layout/new-movie-diolog/new-movie-diolog.component';
import { NewActorDiologComponent } from './layout/new-actor-diolog/new-actor-diolog.component';
import { NewCategoryDiologComponent } from './layout/new-category-diolog/new-category-diolog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ActorComponent,
    CategoriesComponent,
    HeaderComponent,
    ComformationDiologComponent,
    NewMovieDiologComponent,
    NewActorDiologComponent,
    NewCategoryDiologComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
