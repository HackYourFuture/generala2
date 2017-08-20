import { RouterModule, Routes } from '@angular/router';

import{ LoginComponent } from './login/login.component';
import{ RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';

const appRoutes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'register', 
    component: RegisterComponent
  },
  { 
    path : 'game',
    component : GameComponent 
  },
  {
    path : '',
    component : WelcomeComponent
  }
];


export const AppRoutingModule = RouterModule.forRoot(appRoutes);