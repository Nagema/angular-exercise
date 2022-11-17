import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() public movie!: any;

  @Output() public movieId = new EventEmitter<string>();

  public emitId = (): void => {
    this.movieId.emit(this.movie.id);
  };

  constructor() {}
  ngOnInit(): void {}
}
