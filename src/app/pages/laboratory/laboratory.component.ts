import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-laboratory',
  standalone: true,
  imports: [NgIf, FormsModule, CardComponent],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  private http = inject(HttpClient); 

  isModalOpen = false;

  laboratory = {
    laboratoryId: null,  
    laboratoryName: '',  
    phone: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    const url = 'http://localhost:8081/laboratories';

    this.http.post(url, this.laboratory).subscribe({
      next: (response) => {
        console.log('Laboratorio registrado:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error al registrar el laboratorio:', error);
      }
    });
  }
}
