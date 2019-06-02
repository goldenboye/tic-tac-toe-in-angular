import { Component, Input } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details-form',
  templateUrl: './player-details-form.component.html',
  styleUrls: ['./player-details-form.component.css']
})
export class PlayerDetailsFormComponent {
  @Input() side: String;

  constructor(private playerService: PlayerService) { }

  onSubmit(form) {
    this.playerService.createPlayer(form.value).subscribe(
      () => {
        console.log('User saved!');
        this.playerService.setPlayer(form.value, this.side);
      },
      () => {
        console.log('User saving failed!');
        this.playerService.setPlayer(form.value, this.side);
      });
    console.log(form.value);
  }

  onLoadExistingUser() {
    console.log('Load existing user');
  }
}
