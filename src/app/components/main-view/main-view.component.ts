import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-view',
  imports: [NgClass],
  standalone: true,
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  @Input() isLibraryExpanded: boolean = false;
  @Input() isShowPlaying: boolean = true;
}
