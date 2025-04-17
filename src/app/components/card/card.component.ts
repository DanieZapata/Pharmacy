import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Laboratory } from '../../services/laboratory.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Output() editarLaboratorio = new EventEmitter<Laboratory>(); 

  laboratorios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerLaboratorios();
  }

  obtenerLaboratorios() {
    this.http.get<any[]>('http://localhost:8081/laboratories').subscribe({
      next: (data) => {
        this.laboratorios = data;
        console.log('Laboratorios obtenidos correctamente');
      },
      error: (error) => {
        console.error('Error al obtener los laboratorios:', error);
      }
    });
  }

  editar(lab: Laboratory) {
    this.editarLaboratorio.emit(lab); // Emitimos el evento con los datos del laboratorio
  }
  
  eliminarLaboratorio(id: number) {
    this.http.delete(`http://localhost:8081/laboratories/${id}`, { responseType: 'text' }).subscribe({
      next: (response) => {
        console.log(`Laboratorio con ID ${id} eliminado correctamente:`, response);
        this.laboratorios = this.laboratorios.filter(lab => lab.LaboratoryId !== id);
        this.obtenerLaboratorios();
      },
      error: (error) => {
        console.error('Error al eliminar el laboratorio:', error);
      }
    });
  }  
}
