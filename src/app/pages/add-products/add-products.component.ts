import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

}
