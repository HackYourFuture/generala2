import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';


@Injectable()
export class GameService {
  
  private url = 'http://localhost:3000';
  private socket;
  private player1;
  private player2;

  constructor(private router: Router) {
    this.socket = io(this.url);
  }

  public getSocketId() {
    return this.socket.id
  }

  public getPlayer1() {
    return this.player1
  }

  public getPlayer2() {
    return this.player2
  }
  
  public addUser(user) {
    user.socketId = this.getSocketId();
    this.socket.emit('add-user', user);
  }

  public reqUsers = () => {
    this.socket.emit('request-users', true);
  }

  public resUsers = () => {
    return Observable.create((observer) => {
      this.socket.on('users', users => {
        observer.next(users);
      });
    });
  }

 public joinGame(user){
   user.inviterId = this.getSocketId();
   this.socket.emit('join-game', user);

 }

 public onJoinGame(){
   return Observable.create((observer) => {
      this.socket.on('join-game', message => {
        this.player1 = message.player1;
        this.player2 = message.player2;
        this.router.navigate(['./game']);
        observer.next(message);
      });
    });
 }

 public sendScore(scoreMessage) {
  this.socket.emit('score', scoreMessage);
 }

  public getScore = () => {
    return Observable.create((observer) => {
      this.socket.on('score', (score) => {
        observer.next(score);
      });
    });
  }
}
