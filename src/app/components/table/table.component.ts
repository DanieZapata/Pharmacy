import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ProductoService, Producto } from '../../services/product.service';
import { LaboratoryService, Laboratory } from '../../services/laboratory.service';
import { forkJoin } from 'rxjs';
import { SearchComponent } from '../search/search.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    SearchComponent,
    MatSnackBarModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lote', 'vencimiento', 'amount', 'price', 'laboratorio', 'acciones'];
  dataSource: Producto[] = [];
  allData: Producto[] = [];
  laboratorios: Laboratory[] = [];

  constructor(
    private productoService: ProductoService,
    private laboratoryService: LaboratoryService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    forkJoin({
      productos: this.productoService.getProductos(),
      laboratorios: this.laboratoryService.getLaboratories()
    }).subscribe({
      next: ({ productos, laboratorios }) => {
        this.laboratorios = laboratorios;
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

  filtrarResultados(searchTerm: string): void {
    if (!searchTerm) {
      this.dataSource = [...this.allData];
    } else {
      this.dataSource = this.allData.filter(item =>
        item.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  editarProducto(product: Producto): void {
    this.productoService.editarProducto(product).subscribe({
      next: (updatedProduct) => {
        console.log('Producto actualizado:', updatedProduct);
        this.snackBar.open('Producto actualizado con éxito', 'Cerrar', { duration: 3000 });
      },
      error: (err) => {
        console.error('Error al editar producto:', err);
        this.snackBar.open('Error al actualizar el producto', 'Cerrar', { duration: 3000 });
      }
    });
  }

  confirmarEliminar(product: Producto): void {
    const confirmacion = confirm(`¿Estás seguro de que deseas eliminar el producto "${product.nameProduct}"?`);
    if (confirmacion) {
      this.eliminarProducto(product);
    }
  }

  eliminarProducto(product: Producto): void {
    this.productoService.eliminarProducto(product.idProduct).subscribe({
      next: () => {
        // Actualiza los datos en el cliente inmediatamente después de la eliminación
        this.allData = this.allData.filter(p => p.idProduct !== product.idProduct);
        this.dataSource = this.dataSource.filter(p => p.idProduct !== product.idProduct);
        this.snackBar.open('Producto eliminado correctamente', 'Cerrar', { duration: 3000 });
      },
      error: (err) => {
        console.error('Error al eliminar producto:', err);
        this.snackBar.open('Error al eliminar el producto', 'Cerrar', { duration: 3000 });
      }
    });
  }
  
}
