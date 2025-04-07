import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isPlayingVisible = true;

  @Output() togglePlaying = new EventEmitter<boolean>();

  onToggleClick() {
    console.log('Toggle button clicked', this.isPlayingVisible);

    this.isPlayingVisible = !this.isPlayingVisible;
    this.togglePlaying.emit(this.isPlayingVisible);
  }
}
