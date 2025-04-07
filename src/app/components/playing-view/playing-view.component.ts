import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-playing-view',
  imports: [CommonModule],
  templateUrl: './playing-view.component.html',
  styleUrl: './playing-view.component.css'
})
export class PlayingViewComponent {
  @Input() isShowPlaying: boolean = true;
}
