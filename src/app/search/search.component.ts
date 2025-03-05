import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,CommonModule,MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() searchChange = new EventEmitter<string>();

  onSearch() {
    this.searchChange.emit(this.searchTerm);
  }

  clearSearch() {
    this.searchTerm = '';
    this.onSearch();
  }
}
