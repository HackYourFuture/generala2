import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/auth.service';
import { User } from 'app/users/user';
import { GameService } from 'app/game.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users;
  private message;
  constructor(private router: Router, private authService: AuthService, 
    private gameService : GameService) {

  }

  ngOnInit() {
    this.gameService.reqUsers();
    this.gameService.resUsers().subscribe(users => this.users = users);
  }
  
  goBack(){
     this.router.navigate(['/']);
  }
  joinGame(user){
    user.inviterEmail = this.authService.getCurrentUser().email;
    this.gameService.joinGame(user);
    this.gameService.onJoinGame().subscribe(message => this.message = message);
  }
}

