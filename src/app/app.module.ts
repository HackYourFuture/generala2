import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDiceComponent } from './player-dice/player-dice.component';
import { PlayerScoringComponent } from './player-scoring/player-scoring.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    PlayerComponent,
    PlayerDiceComponent,
    PlayerScoringComponent
  ],
  imports: [
    BrowserModule, routing, [FlexLayoutModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
