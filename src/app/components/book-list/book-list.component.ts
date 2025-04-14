import { Book } from './../../models/book';
import { Component } from '@angular/core';
import {BookService} from '../../services/book.service';
@Component({
  selector: 'app-book-list',
  imports: [],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
bookService = inject(BookService);
books = this.bookService.getBooks();
}
