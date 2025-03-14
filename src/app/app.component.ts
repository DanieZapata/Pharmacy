import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ProductRegistrationComponent } from './components/product-registration/product-registration.component';
//import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, RouterModule, CommonModule, /*ProductRegistrationComponent /*CardComponent*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pharmacy';
}
