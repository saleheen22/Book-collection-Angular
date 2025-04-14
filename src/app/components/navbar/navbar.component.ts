import { BookFormComponent } from './../book-form/book-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [BookFormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
