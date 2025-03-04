import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  medicamentos = [
    {
      nombre: "Paracetamol 500mg",
      lote: "ABC12345",
      fechaVencimiento: "12/2026",
      cantidad: 50,
      precio: 5.00
    },
    {
      nombre: "Ibuprofeno 400mg",
      lote: "XYZ67890",
      fechaVencimiento: "08/2025",
      cantidad: 30,
      precio: 7.50
    },
    {
      nombre: "Paracetamol 500mg",
      lote: "ABC12345",
      fechaVencimiento: "12/2026",
      cantidad: 50,
      precio: 5.00
    },
    {
      nombre: "Ibuprofeno 400mg",
      lote: "XYZ67890",
      fechaVencimiento: "08/2025",
      cantidad: 30,
      precio: 7.50
    },
    {
      nombre: "Paracetamol 500mg",
      lote: "ABC12345",
      fechaVencimiento: "12/2026",
      cantidad: 50,
      precio: 5.00
    },
    {
      nombre: "Ibuprofeno 400mg",
      lote: "XYZ67890",
      fechaVencimiento: "08/2025",
      cantidad: 30,
      precio: 7.50
    }
  ];
}
