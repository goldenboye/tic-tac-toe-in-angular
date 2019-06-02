import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  leftPlayerScore = 0;
  rightPlayerScore = 0;
  leftPlayerCreated = false;
  rightPlayerCreated = false;

  private players = {
    player1: { name: 'Player1', security: { question: '', answer: '' } },
    player2: { name: 'Player2', security: { question: '', answer: '' } }
  };

  private url = 'http://localhost:3000';
  private id = 0;

  constructor(private http: HttpClient) { }

  createPlayer(details) {
    return this.http.post(this.url + '/players', {
      id: Math.floor(Math.random() * 100),
      ...details
    });
  }

  setPlayer(details, side) {
    if (side === 'LEFT') {
      Object.assign(this.players.player1, details);
      this.leftPlayerCreated = true;
    } else {
      Object.assign(this.players.player2, details);
      this.rightPlayerCreated = true;
    }
  }

  getLeftPlayerName() {
    return this.players.player1.name;
  }

  getRightPlayerName() {
    return this.players.player2.name;
  }

  isCreated() {
    return this.leftPlayerCreated && this.rightPlayerCreated;
  }
}
