import { BookFormComponent } from './../book-form/book-form.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [BookFormComponent],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  openModal() {
    const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
}
