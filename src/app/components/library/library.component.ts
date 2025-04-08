import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-library',
  imports: [CommonModule, FormsModule],
  templateUrl: './library.component.html',
  styleUrl: './library.component.css'
})
export class LibraryComponent {
  isExpanded = false;
  @Output() isExpandedChange = new EventEmitter<boolean>();

  // Variables para manejar las playlists
  playlists: { name: string, artist: string }[] = [];
  newPlaylistName = '';
  newPlaylistArtist = '';
  showForm = false; // Controla la visibilidad del formulario

  toggleLibrary() {
    this.isExpanded = !this.isExpanded;
    this.isExpandedChange.emit(this.isExpanded);
  }

  // Toggle para mostrar/ocultar el formulario
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Agregar una nueva playlist
  addPlaylist() {
    if (this.newPlaylistName && this.newPlaylistArtist) {
      this.playlists.push({
        name: this.newPlaylistName,
        artist: this.newPlaylistArtist
      });
      this.newPlaylistName = '';
      this.newPlaylistArtist = '';
      this.showForm = false; // Ocultar el formulario después de agregar
    }
  }
}
