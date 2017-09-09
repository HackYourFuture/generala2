import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  imagePath : string = "./assets/pic/generala.jpg";

  constructor(private router: Router) { }

  startGame(){
    this.router.navigate(['./user-list']);
   }
   
  ngOnInit() {
  }

}
