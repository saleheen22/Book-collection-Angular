import { BookService } from './../../services/book.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {
bookService = inject(BookService);
newBook = {
  title: '',
  author: '',
  year: undefined as number | undefined,
  genre: ''
};
addBook(): void {
if (this.newBook.title && this.newBook.author && this.newBook.year && this.newBook.genre) {
  this.bookService.createBook(this.newBook);
  this.newBook = {
    title: '',
    author: '',
    year: undefined,
    genre: ''
  };
}
alert('The book is added successfully!')
}
}
