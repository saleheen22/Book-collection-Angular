import { CommonModule } from '@angular/common';
import { Book } from './../../models/book';
import { Component, inject } from '@angular/core';
import {BookService} from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
bookService = inject(BookService);
books = this.bookService.books;
}
