import { Routes } from '@angular/router';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { TableComponent } from './components/table/table.component';
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: TableComponent },
  { path: 'add-products', component: ProductRegistrationComponent },
  { path: 'products', component: TableComponent },
  { path: 'laboratories', component: CardComponent },
];
