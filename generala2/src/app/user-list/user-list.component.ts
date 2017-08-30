import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth.service';
import { User } from 'app/users/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.getUsers().subscribe(users => this.users = users);
    
  }

  refresh() {
    this.authService.getUsers().subscribe(users => this.users = users);
  }
}

