import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { FooterComponent } from './sections/footer/footer.component';
import { MiddleContentComponent } from './sections/middle-content/middle-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MiddleContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    constructor(private cd: ChangeDetectorRef) {}
  title = 'spotify-app';
  isShowPlaying = true;

  onTogglePlayingChange(value: boolean) {
    console.log('Valor recibido en AppComponent:', value);
    this.isShowPlaying = value;
  }

}
