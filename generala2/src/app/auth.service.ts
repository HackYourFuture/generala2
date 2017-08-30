import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/observable';
import { User } from './users/user';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private base_url = 'http://127.0.0.1:3000/api/user';
  token: string;
  private userSource = new Subject<User>();
  user$ = this.userSource.asObservable();
  loggedinUsers:any;
  games:any;
  currUser = new User();///

  constructor(public http: Http) { }

  setUser(user: User) {
    this.userSource.next(user);
  }

  registerUser(user: User): Observable<boolean> {
    let body = JSON.stringify(user);
    this.currUser = user;
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.base_url}/register`, body, options).map( (res) => this.setToken(res) );
  }

  loginUser(user): Observable<Object> {
    let body = JSON.stringify(user);
    this.currUser = user;
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.base_url}/login`, body, options).map( (res) => this.setToken(res) );
  }

  logout() {
    let body = JSON.stringify(this.currUser);///
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.token = null;
    localStorage.removeItem('currentUser');

    return this.http.post(`${this.base_url}/logout`, body, options).subscribe((res:Response) => res.json());
  }

  deleteUser() {
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.token = null;
    localStorage.removeItem('currentUser');
    ///
    return this.http.delete(`${this.base_url}/delete/${this.currUser.email}`, options).subscribe((res:Response) => res.json());
  }

  getUsers() :Observable<Object> {
    
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    console.log("getUsers");
    return this.http.get(`${this.base_url}/users`, options).map((res) => this.loggedinUsers = res.json());
    /*let currUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.loggedinUsers) {
      this.loggedinUsers = this.loggedinUsers.filter(function( obj ) {
        return obj.email !== currUser.email;
      });
    }

    return this.loggedinUsers.asObservable();*/
  }

  getGames():  Observable<Object> {
    
    let headers = new Headers();
		headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.base_url}/games`, options).map((res) => this.games = res.json());
    //return this.games;
  }

  getCurrentUser(){
    return this.currUser;
  }




  verify(): Observable<Object> {

    let currUser = JSON.parse(localStorage.getItem('currentUser')); 
    let token = ( currUser && 'token' in currUser) ? currUser.token : this.token;
    let headers = new Headers({ 'x-access-token': token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(`${this.base_url}/check-state`, options).map( res => this.parseRes(res) );
    
  }

  setToken(res){
    let body = JSON.parse(res['_body']);
    if( body['success'] == true ){
      this.token = body['token'];
      localStorage.setItem('currentUser', JSON.stringify({ 
        email: body['user']['email'], 
        token: this.token 
      }));
    }
    return body;
  }

  parseRes(res){
    let body = JSON.parse(res['_body']);
    return body;
  }

}
