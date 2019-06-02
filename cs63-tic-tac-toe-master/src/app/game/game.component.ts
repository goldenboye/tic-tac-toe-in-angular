import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  constructor(private gameService: GameService) { }

  get grid() {
    return this.gameService.grid;
  }

  onCellClicked(rowIdx: number, colIdx: number) {
    const winner = this.gameService.setCellValue(rowIdx, colIdx);
    if (winner !== null) {
      setTimeout(() => {
        alert(`${winner} wins`);
        this.gameService.reset();
      }, 100);
    }
  }
}
