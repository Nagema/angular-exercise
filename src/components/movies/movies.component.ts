import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public movies!: any[];

  constructor() {
    axios
      .get('https://ghibliapi.herokuapp.com/films')
      .then((res) => (this.movies = res.data));
  }

  public getId = (movieId: string) => {
    console.log(movieId);
  };

  ngOnInit(): void {
    console.log(this.movies);
  }
}
