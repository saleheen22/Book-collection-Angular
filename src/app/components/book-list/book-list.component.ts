import { SHARED_IMPORTS } from './../shared/shared.imports';

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
deleteBook(id: number) {
  this.bookService.deleteBook(id);
  alert('The book is deleted successfully!')
}
updateBook(book: Book) {
  this.bookService.updateBook(book);
  alert('The book is updated successfully!')
}
openModal() {
  const modal = document.getElementById('my_modal_5') as HTMLDialogElement;
  if (modal) {
    modal.showModal();
  }
}
}
