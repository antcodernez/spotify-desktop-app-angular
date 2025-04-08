import { Component, Input, SimpleChanges } from '@angular/core';
import { LibraryComponent } from '../../components/library/library.component';
import { MainViewComponent } from '../../components/main-view/main-view.component';
import { PlayingViewComponent } from '../../components/playing-view/playing-view.component';

@Component({
  selector: 'app-middle-content',
  standalone: true,
  imports: [LibraryComponent, MainViewComponent, PlayingViewComponent],
  templateUrl: './middle-content.component.html',
  styleUrl: './middle-content.component.css'
})
export class MiddleContentComponent {
  isLibraryExpanded = false;
  @Input() isShowPlaying = true;

  onLibraryExpandedChange(expanded: boolean) {
    this.isLibraryExpanded = expanded;
  }

}
