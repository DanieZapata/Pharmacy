import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LaboratoryService {
  private laboratories = [
    { id: 1, name: 'Laboratorio Central' },
    { id: 2, name: 'BioTech Solutions' },
  ];

  getLaboratories() {
    return this.laboratories;
  }
}
