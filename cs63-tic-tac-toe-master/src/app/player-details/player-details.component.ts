import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html'
})
export class PlayerDetailsComponent {
  @Input() name: String;
  @Input() symbol: String;
}
