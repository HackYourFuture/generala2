import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-dice',
  templateUrl: './player-dice.component.html',
  styleUrls: ['./player-dice.component.css']
})
export class PlayerDiceComponent implements OnInit {
  
  initialDices = [
    "./assets/dice/dice1.png",
    "./assets/dice/dice2.png",
    "./assets/dice/dice3.png",
    "./assets/dice/dice4.png",
    "./assets/dice/dice5.png",
    "./assets/dice/dice6.png"
  ];

  dices = [
    "./assets/dice/dice1.png",
    "./assets/dice/dice2.png",
    "./assets/dice/dice3.png",
    "./assets/dice/dice4.png",
    "./assets/dice/dice5.png"
  ];

  throwCounter : number = 0;

  throwDice(){
    if (this.throwCounter < 3){
      for (let i: number = 0; i < 5; i++){
        let randomDice  = Math.floor( Math.random() * 6 )
        this.dices[i] = this.initialDices[randomDice];
      }
      this.throwCounter++;
    }
    else{
      alert("only 3 times allowed");
    }
    
  }
  constructor() { }

  ngOnInit() {
  }

}
