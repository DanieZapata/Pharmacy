import { Routes } from '@angular/router';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { TableComponent } from './components/table/table.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: TableComponent },
  { path: 'add-products', component: AddProductsComponent },
];
