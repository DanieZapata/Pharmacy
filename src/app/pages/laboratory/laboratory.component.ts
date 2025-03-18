import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laboratory',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  isModalOpen = false;

  laboratory = {
    name: '',
    phone: '',
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    console.log('Laboratorio registrado:', this.laboratory);
    this.closeModal();
  }

}
