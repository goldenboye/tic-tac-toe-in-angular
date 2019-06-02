import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScoreCardComponent } from './score-card/score-card.component';
import { GameAreaComponent } from './game-area/game-area.component';
import { PlayerDetailsFormComponent } from './player-details-form/player-details-form.component';
import { GameComponent } from './game/game.component';
import { GameControlsComponent } from './game-controls/game-controls.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreCardComponent,
    GameAreaComponent,
    PlayerDetailsFormComponent,
    GameComponent,
    GameControlsComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
