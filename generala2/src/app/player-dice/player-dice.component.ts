import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player-dice',
  templateUrl: './player-dice.component.html',
  styleUrls: ['./player-dice.component.css']
})
export class PlayerDiceComponent implements OnInit {
  @Output () select = new EventEmitter;
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

  private throwCounter : number = 0;
  score;
  constructor() { 
    this.score = {
    "score1": 0,
    "score2": 0,
    "score3": 0,
    "score4": 0,
    "score5": 0,
    "score6": 0
    };
  }
  
  ngOnInit() {
  }

  throwDice(){
    if (this.throwCounter < 3){
    this.score = {
      "score1": 0,
      "score2": 0,
      "score3": 0,
      "score4": 0,
      "score5": 0,
      "score6": 0
    };
  
      for (let i: number = 0; i < 5; i++){
        let randomDice  = Math.floor( Math.random() * 6 )
        this.dices[i] = this.initialDices[randomDice];
        switch(randomDice + 1) { 
            case 1: { 
                this.score.score1 += 1; 
                break; 
            }
            case 2: { 
                this.score.score2 += 2; 
                break; 
            } 
            case 3: { 
                this.score.score3 += 3; 
                break; 
            } 
            case 4: { 
                this.score.score4 += 4; 
                break; 
            }  
            case 5: { 
                this.score.score5 += 5;
                break; 
            }
            case 6: { 
                this.score.score6 += 6; 
                break; 
            }  
            default: { 
                //statements; 
                break; 
            } 
        } 
      }
      this.throwCounter++;
    }
    else{
      alert("only 3 times allowed");
    }
    
  }
  onSelect() {
    this.select.emit(this.score);
  }

}
