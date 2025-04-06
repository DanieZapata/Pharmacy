import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna la visibilidad del menú
  }

  action(action: string) {
    console.log(`Acción seleccionada: ${action}`);
    this.isMenuOpen = false; // Cierra el menú después de hacer una selección
  }
}
