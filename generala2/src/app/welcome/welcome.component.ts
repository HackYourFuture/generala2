import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'app/game.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  imagePath : string = "./assets/pic/generala.jpg";

  constructor(private router: Router, private gameService: GameService) { }

  startGame(){
    this.router.navigate(['./user-list']);
    this.router.navigate(['./game']);
    this.gameService.onJoinGame().subscribe(message => console.log(message));
    this.router.navigate(['./user-list']);
   }
   
  ngOnInit() {
  }

}
