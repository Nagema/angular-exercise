import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { MoviesComponent } from '../components/movies/movies.component';
import { CardComponent } from '../components/movies/card/card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MoviesComponent, CardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
