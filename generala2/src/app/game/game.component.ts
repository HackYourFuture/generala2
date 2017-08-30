import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private router:Router) { }
  
  goBack(){
     this.router.navigate(['/']);
   }
   
  ngOnInit() {
  }
  score1 = {
    "score1": 0,
    "score2": 0,
    "score3": 0,
    "score4": 0,
    "score5": 0,
    "score6": 0
  };

  score2 = {
    "score1": 0,
    "score2": 0,
    "score3": 0,
    "score4": 0,
    "score5": 0,
    "score6": 0
  };
  setScore1(score){
    this.score1 = score;
  }
    

}
