import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { ProfileMenuComponent } from '../../components/profile-menu/profile-menu.component';

@Component({
  selector: 'app-header',
  imports: [SearchBarComponent, ProfileMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
