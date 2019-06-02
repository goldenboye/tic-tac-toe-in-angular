import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.css']
})
export class GameAreaComponent {

  constructor(private playerService: PlayerService) { }

  get leftPlayerCreated() {
    return this.playerService.leftPlayerCreated;
  }

  get rightPlayerCreated() {
    return this.playerService.rightPlayerCreated;
  }
}
