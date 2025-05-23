import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Laboratory {
  laboratoryId: number;
  laboratoryName: string;
  phone:string;
}

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  private apiUrl = 'http://localhost:8081/laboratories';

  constructor(private http: HttpClient) {}

  getLaboratories(): Observable<Laboratory[]> {
    return this.http.get<Laboratory[]>(this.apiUrl);
  }

  deleteLaboratory(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
