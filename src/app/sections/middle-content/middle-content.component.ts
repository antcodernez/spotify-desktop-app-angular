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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isShowPlaying']) {
      console.log('⚡️ MiddleContentComponent recibió:', changes['isShowPlaying'].currentValue);
    }
  }

  onLibraryExpandedChange(expanded: boolean) {
    this.isLibraryExpanded = expanded;
  }

}
