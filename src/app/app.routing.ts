import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';

const appRoutes = [
    { path : 'game', component : GameComponent },
    { path : '', component : WelcomeComponent}
];

export const routing = RouterModule.forRoot(appRoutes);