import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CardComponent } from "../../components/card/card.component";
import { LaboratoryService } from '../../services/laboratory.service';

@Component({
  selector: 'app-laboratory',
  standalone: true,
  imports: [NgIf, FormsModule, CardComponent],
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class LaboratoryComponent {
  private http = inject(HttpClient);
  private laboratoryService = inject(LaboratoryService);

  laboratorios: any[] = [];
  isModalOpen = false;
  isEditMode = false;

  laboratory = {
    laboratoryId: null,
    laboratoryName: '',
    phone: ''
  };

  // Captura el evento emitido desde CardComponent y abre el modal con los datos del laboratorio
  onEditarLaboratorio(lab: any) {
    this.openModal(lab); 
  }

  openModal(lab?: any) {
    if (lab) {
      this.laboratory = { ...lab };  // Copia los datos del laboratorio
      this.isEditMode = true;
    } else {
      this.laboratory = { laboratoryId: null, laboratoryName: '', phone: '' };  // Nuevo laboratorio
      this.isEditMode = false;
    }
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  obtenerLaboratorios() {
    this.laboratoryService.getLaboratories().subscribe({
      next: (data) => {
        this.laboratorios = data;
        console.log('Laboratorios cargados correctamente');
      },
      error: (err) => {
        console.error('Error al cargar laboratorios', err);
      }
    });
  }

  ngOnInit() {
    this.obtenerLaboratorios();
  }

  submitForm() {
    const url = this.isEditMode
      ? `http://localhost:8081/laboratories/${this.laboratory.laboratoryId}`
      : 'http://localhost:8081/laboratories';

    const httpCall = this.isEditMode
      ? this.http.put(url, this.laboratory)
      : this.http.post(url, this.laboratory);

    httpCall.subscribe({
      next: () => {
        console.log(this.isEditMode ? 'Laboratorio actualizado' : 'Laboratorio creado');
        this.closeModal();
        this.obtenerLaboratorios();
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}
