import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  amount: number;
  lote: number;
  vencimiento: Date;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { amount: 1, name: 'Hydrogen', lote: 1.0079, vencimiento: new Date('2005-10-22'), price: 10 },
  { amount: 2, name: 'Helium', lote: 4.0026, vencimiento: new Date('2006-05-15'), price: 20 },
  { amount: 3, name: 'Lithium', lote: 6.941, vencimiento: new Date('2007-08-10'), price: 30 },
  { amount: 4, name: 'Beryllium', lote: 9.0122, vencimiento: new Date('2008-12-05'), price: 40 },
  { amount: 5, name: 'Boron', lote: 10.811, vencimiento: new Date('2009-03-20'), price: 50 },
  { amount: 6, name: 'Carbon', lote: 12.0107, vencimiento: new Date('2010-07-14'), price: 60 },
  { amount: 7, name: 'Nitrogen', lote: 14.0067, vencimiento: new Date('2011-09-30'), price: 70 },
  { amount: 8, name: 'Oxygen', lote: 15.9994, vencimiento: new Date('2012-11-25'), price: 80 },
  { amount: 9, name: 'Fluorine', lote: 18.9984, vencimiento: new Date('2013-01-18'), price: 90 },
  { amount: 10, name: 'Neon', lote: 20.1797, vencimiento: new Date('2014-04-22'), price: 100 },
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'lote', 'vencimiento', 'amount', 'price'];
  dataSource = ELEMENT_DATA;
}
