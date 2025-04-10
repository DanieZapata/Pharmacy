import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryService } from '../../services/laboratory.serve';
import { TableComponent } from "../table/table.component";

interface Laboratory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, TableComponent],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.css',
})
export class ProductRegistrationComponent {
  isModalOpen = false;
  laboratories: Laboratory[] = [];

  product = {
    name: '',
    lote: '',
    cantidad: 0,
    fechaVencimiento: '',
    precio: 0,
    laboratoryId: null,
  };

  constructor(private laboratoryService: LaboratoryService) {
   // this.laboratories = this.laboratoryService.getLaboratories();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.product = { name: '', lote: '', cantidad: 0, fechaVencimiento: '', precio: 0, laboratoryId: null };
  }

  submitForm() {
    console.log('Producto registrado:', this.product);
    this.closeModal();
  }
}
