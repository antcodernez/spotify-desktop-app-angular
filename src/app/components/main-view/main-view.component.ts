import { CommonModule, NgClass, NgIf, NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WelcomeViewComponent } from '../welcome-view/welcome-view.component';

@Component({
  selector: 'app-main-view',
  imports: [NgClass, WelcomeViewComponent, NgSwitch, CommonModule],
  standalone: true,
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css'
})
export class MainViewComponent {
  @Input() isLibraryExpanded: boolean = false;
  @Input() isShowPlaying: boolean = true;

  currentView: string = 'welcome';
}
