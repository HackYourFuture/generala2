import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-dice2',
  templateUrl: './player-dice2.component.html',
  styleUrls: ['./player-dice2.component.css']
})
export class PlayerDice2Component implements OnInit {
  

  @Input () dices;
  constructor() { }

  ngOnInit() { }
}
