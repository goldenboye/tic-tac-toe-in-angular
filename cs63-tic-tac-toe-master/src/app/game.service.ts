import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  turn = 0;

  constructor(private playerService: PlayerService) { }

  reset() {
    this.grid = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.turn = 0;
  }
  setCellValue(rowIdx: number, colIdx: number) {
    if (!this.playerService.isCreated()) {
      alert('Create players first!');
      return null;
    }
    let winner = null;
    if (this.turn === 0) {
      this.grid[rowIdx][colIdx] = 'X';
      if (Utils.isGameOver(this.grid)) {
        winner = this.playerService.getLeftPlayerName();
        this.playerService.leftPlayerScore += 1;
      }
      this.turn = 1;
    } else {
      this.grid[rowIdx][colIdx] = 'O';
      if (Utils.isGameOver(this.grid)) {
        winner = this.playerService.getRightPlayerName();
        this.playerService.rightPlayerScore += 1;
      }
      this.turn = 0;
    }
    return winner;
  }
}
