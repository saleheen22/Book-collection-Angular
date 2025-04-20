import { SHARED_IMPORTS } from './../shared/shared.imports';
import {Book} from '../../models/book'
import { BookService } from './../../services/book.service';
import { Component, inject, Input, onChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book-form',
  imports: [CommonModule, FormsModule, SHARED_IMPORTS],
  standalone: true,
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements onChanges {
  @Input() book: Book | null = null;

bookService = inject(BookService);
newBook = {
  title: '',
  author: '',
  year: undefined as number | undefined,
  genre: '',
  src: ''
};
addBook(): void {
if (this.newBook.title && this.newBook.author && this.newBook.year && this.newBook.genre) {
  this.bookService.createBook(this.newBook);
  this.newBook = {
    title: '',
    author: '',
    year: undefined,
    genre: '',
    src: ''
  };
};
Swal.fire({
  icon: 'success',
  title: 'Success!',
  text: 'Book added successfully!'
})
const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
}
}
