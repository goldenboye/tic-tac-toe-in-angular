import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-controls',
  template: `
    <button (click)="onReset()">Reset</button>
  `,
  styleUrls: ['./game-controls.component.css']
})
export class GameControlsComponent {

  constructor(private gameService: GameService) { }

  onReset() {
    this.gameService.reset();
  }
}
