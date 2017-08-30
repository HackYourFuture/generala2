import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { Game } from 'app/games/game';
@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  private games;//: Game[];
  constructor(private authService: AuthService) {
  }
  

  ngOnInit() {
    this.authService.getGames().subscribe(games => this.games = games);
  }

  refresh() {
    this.authService.getGames().subscribe(games => this.games = games);
    //this.games = this.authService.getGames();
  }

}
