import { Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: TableComponent },
  { path: 'products', component: ProductRegistrationComponent },
];
