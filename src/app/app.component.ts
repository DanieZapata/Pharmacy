import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
//import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, TableComponent/*CardComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pharmacy';
}
