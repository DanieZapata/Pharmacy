import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/product.service';
import { LaboratoryService, Laboratory } from '../../services/laboratory.service';
import { forkJoin } from 'rxjs';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, CommonModule, SearchComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lote', 'vencimiento', 'amount', 'price', 'laboratorio'];
  dataSource: Producto[] = [];
  allData: Producto[] = [];
  laboratorios: Laboratory[] = []; 

  constructor(
    private productoService: ProductoService,
    private laboratoryService: LaboratoryService
  ) {}

  ngOnInit(): void {
    forkJoin({
      productos: this.productoService.getProductos(),
      laboratorios: this.laboratoryService.getLaboratories()
    }).subscribe({
      next: ({ productos, laboratorios }) => {
        this.laboratorios = laboratorios;

        // Mapear los productos y agregar el nombre del laboratorio usando laboratoryId
        this.allData = productos.map(item => ({
          ...item,
          expiration: new Date(item.expiration),
          laboratorioNombre: this.laboratorios.find(lab => lab.laboratoryId === item.laboratoryId)?.laboratoryName || 'Desconocido'
        }));
        this.dataSource = [...this.allData];
      },
      error: (err) => {
        console.error('Error al cargar productos o laboratorios', err);
      }
    });
  }

  filtrarResultados(searchTerm: string) {
    if (!searchTerm) {
      this.dataSource = [...this.allData];
    } else {
      this.dataSource = this.allData.filter(item =>
        item.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
