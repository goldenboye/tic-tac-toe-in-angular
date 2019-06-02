import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent {

  constructor(private playerService: PlayerService) { }

  get leftPlayerScore() {
    return this.playerService.leftPlayerScore;
  }

  get rightPlayerScore() {
    return this.playerService.rightPlayerScore;
  }
}
