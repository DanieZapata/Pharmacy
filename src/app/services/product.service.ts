import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  idProduct: number;
  nameProduct: string;
  priceProduct: number;
  lote: string;
  amount: number;
  expiration: Date;
  composition: string;
  description: string;
  laboratoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:8081/productos';

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  editarProducto(product: Producto): Observable<Producto> {
    const endpoint = `${this.apiUrl}/${product.idProduct}`;
    return this.http.put<Producto>(endpoint, product);
  }

  eliminarProducto(productId: number): Observable<string> {
    const endpoint = `${this.apiUrl}/${productId}`;
    return this.http.delete<string>(endpoint, { responseType: 'text' as 'json' });
  }
}
