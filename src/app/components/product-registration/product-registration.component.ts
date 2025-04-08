import { Component, inject, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LaboratoryService, Laboratory } from '../../services/laboratory.service';
import { TableComponent } from "../table/table.component";
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

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

  private http = inject(HttpClient); 

  product = {
    nameProduct: '',
    priceProduct: 0,
    lote: '',
    amount: 0,
    expiration: '',
    composition: '',
    description: '',
    laboratoryId: null,
  };

  constructor(private laboratoryService: LaboratoryService) {}
    ngOnInit() {
      this.laboratoryService.getLaboratories().subscribe({
        next: (labs) => this.laboratories = labs,
        error: (err) => console.error('Error cargando laboratorios', err)
      });
    }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    const url = 'http://localhost:8081/productos';

    this.http.post(url, this.product).subscribe({
      next: (response) => {
        console.log('Producto registrado:', response);
        this.closeModal();
      },
      error: (error) => {
        console.error('Error al registrar el producto:', error);
      }
    })

  }
}
