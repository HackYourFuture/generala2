import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { GameService } from 'app/game.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private message: String;
  private player1; private player2;
  private playerId1; private playerId2;
  private score1; private score2;
  constructor(private router: Router, private authService:AuthService, private gameService: GameService) {
        this.score1 = {
        "score1": 0,
        "score2": 0,
        "score3": 0,
        "score4": 0,
        "score5": 0,
        "score6": 0
      };

      this.score2 = {
        "score1": 0,
        "score2": 0,
        "score3": 0,
        "score4": 0,
        "score5": 0,
        "score6": 0,
        
      };
      this.score2.dice = [
        "./assets/dice/dice1.png",
        "./assets/dice/dice2.png",
        "./assets/dice/dice3.png",
        "./assets/dice/dice4.png",
        "./assets/dice/dice5.png"
      ];
   }
  
  goBack(){
     this.router.navigate(['/user-list']);
   }
   
  ngOnInit() {
    this.player1 = this.gameService.getPlayer1().email;
    this.player2 = this.gameService.getPlayer2().email;
    this.playerId1 = this.gameService.getPlayer1().socketId;
    this.playerId2 = this.gameService.getPlayer2().socketId;
    this.gameService
      .getScore()
      .subscribe((score) => {
        this.score2 = score;
    });
  }
  
  
  //score2.
  setScore(score){
    this.score1 = score;

    let scoreMessage = {
      'score':[],
      'socketId' : ''
    };

    scoreMessage.score = score;
    scoreMessage.socketId = this.playerId2
    this.gameService.sendScore(scoreMessage);
  }
  saveGame(){
    let gameRow = {
      player1: this.player1,
      player2: this.player2,
      score1: this.getMax(this.score1),
      score2: this.getMax(this.score2)
    };
    this.authService.saveGame(gameRow);
  }

  getMax(score){
    let max = score.score1;
    max  = (score.score2> max? score.score2: max);
    max  = (score.score3> max? score.score3: max);
    max  = (score.score4> max? score.score4: max);
    max  = (score.score5> max? score.score5: max);
    max  = (score.score6> max? score.score6: max);
    return max;
  }

}
