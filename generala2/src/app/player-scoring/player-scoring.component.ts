import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-scoring',
  templateUrl: './player-scoring.component.html',
  styleUrls: ['./player-scoring.component.css']
})
export class PlayerScoringComponent implements OnInit {
  @Input () score;
  constructor() { }

  ngOnInit() {
  }

}
