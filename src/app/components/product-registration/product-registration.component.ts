import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryService, Laboratory } from '../../services/laboratory.service';
import { TableComponent } from "../table/table.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-registration',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, TableComponent],
  templateUrl: './product-registration.component.html',
  styleUrl: './product-registration.component.css',
})
export class ProductRegistrationComponent {
  isModalOpen = false;
  isEditMode = false;
  laboratories: Laboratory[] = [];

  private http = inject(HttpClient); 

  product = {
    idProduct: null,
    nameProduct: '',
    priceProduct: 0,
    lote: '',
    amount: 0,
    expiration: '',
    composition: '',
    description: '',
    laboratoryId: null,
  };

  onEditarProducto(product: any) {
    this.openModal(product); 
  }

  constructor(private laboratoryService: LaboratoryService) {}

  ngOnInit() {
    this.laboratoryService.getLaboratories().subscribe({
      next: (labs) => this.laboratories = labs,
      error: (err) => console.error('Error cargando laboratorios', err)
    });
  }

  openModal(product?: any) {
    if (product) {
      this.product = { ...product };
      this.isEditMode = true;
    } else {
      this.product = {
        idProduct: null,
        nameProduct: '',
        priceProduct: 0,
        lote: '',
        amount: 0,
        expiration: '',
        composition: '',
        description: '',
        laboratoryId: null,
      };
      this.isEditMode = false;
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    const url = this.isEditMode
    ? `http://localhost:8081/productos/${this.product.idProduct}`
    : 'http://localhost:8081/productos';

    const httpCall = this.isEditMode
      ? this.http.put(url, this.product)
      : this.http.post(url, this.product);

      httpCall.subscribe({
        next: () => {
          console.log(this.isEditMode ? 'Producto actualizado' : 'Producto creado');
          this.closeModal();
          window.location.reload();
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
    }
}
