import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from './users/user';
import { Subscription }   from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { GameService } from 'app/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService, GameService]
})
export class AppComponent implements OnInit, OnDestroy {
  articles;
  user: User;
  message: String;
  subscription: Subscription;

  constructor( private authService: AuthService, private router: Router) {
    this.articles = [];

    this.subscription = authService.user$.subscribe( (user) => this.user = user )

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));

    //example of verification
    this.authService.verify().subscribe( (res) => this.message = res['message']);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.user = null;
    this.message = "Logged out";
    this.router.navigate(['']);
  }

  deleteUser() {
    this.authService.deleteUser();
    this.user = null;
    this.message = "Deleted";
    this.router.navigate(['']);
  }

}