import { Component, EventEmitter, Output, Input } from '@angular/core';
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
export class CardComponent {
  @Input() laboratorios: Laboratory[] = [];
  @Output() editarLaboratorio = new EventEmitter<Laboratory>(); 
  @Output() laboratorioEliminado = new EventEmitter<number>();

  editar(lab: Laboratory) {
    this.editarLaboratorio.emit(lab); // Emitimos el evento con los datos del laboratorio
  }

  eliminarLaboratorio(id: number) {
    this.http.delete(`http://localhost:8081/laboratories/${id}`, { responseType: 'text' }).subscribe({
      next: () => {
        console.log(`Laboratorio con ID ${id} eliminado correctamente`);
        this.laboratorioEliminado.emit(id); // Avisamos al padre que se eliminó
      },
      error: (error) => {
        console.error('Error al eliminar el laboratorio:', error);
      }
    });
  }

  constructor(private http: HttpClient) {}
}
