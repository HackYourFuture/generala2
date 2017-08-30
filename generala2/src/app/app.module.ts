import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
import { PlayerDiceComponent } from './player-dice/player-dice.component';
import { PlayerScoringComponent } from './player-scoring/player-scoring.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';
import { GamesListComponent } from './games-list/games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GameComponent,
    PlayerComponent,
    PlayerDiceComponent,
    PlayerScoringComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent,
    GamesListComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,
    HttpModule, [FlexLayoutModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
