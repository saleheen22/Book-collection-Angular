import { SHARED_IMPORTS } from './../shared/shared.imports';
import Swal from 'sweetalert2';

import { Book } from './../../models/book';
import { Component, inject } from '@angular/core';
import {BookService} from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  imports: [...SHARED_IMPORTS],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
bookService = inject(BookService);
books = this.bookService.books;
editingBook: Book | null = null;
deleteBook(id: number) {
  this.bookService.deleteBook(id);
  Swal.fire({
    icon: 'success',
    title: 'Deleted!',
    text: 'Book deleted successfully!'
  });
}
updateBook(id: number, changes: Partial<Book>) {
  this.bookService.updateBook(id, changes);
  alert('The book is updated successfully!')
}
openModal(book: Book) {
  this.editingBook = book;
  const modal = document.getElementById('my_modal_6') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}
}
