import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [NgIf, FormsModule, TableComponent],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.css'
})
export class ProductRegistrationComponent {
  isModalOpen = false;

  product = {
    name: '',
    lote: '',
    cantidad: 0,
    fechaVencimiento: '',
    precio: 0,
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    console.log('Producto registrado:', this.product);
    this.closeModal();
  }
}
