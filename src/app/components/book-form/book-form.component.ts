import { SHARED_IMPORTS } from './../shared/shared.imports';
import { Book } from '../../models/book';
import { BookService } from './../../services/book.service';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class BookFormComponent implements OnChanges {
  @Input() book: Book | null = null;

  bookService = inject(BookService);

  newBook = {
    title: '',
    author: '',
    year: undefined as number | undefined,
    genre: '',
    src: ''
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['book'] && this.book) {
      this.newBook = {
        title: this.book.title,
        author: this.book.author,
        year: this.book.year,
        genre: this.book.genre ?? '',
        src: this.book.src ?? ''
      };
    } else if (!this.book) {
      this.newBook = {
        title: '',
        author: '',
        year: undefined,
        genre: '',
        src: ''
      };
    }
  }

  addBook(): void {
    if (this.newBook.title && this.newBook.author) {
      if (this.book) {
        // Update mode
        this.bookService.updateBook(this.book.id, this.newBook);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Book updated successfully!'
        });
      } else {
        // Add mode
        this.bookService.createBook(this.newBook);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Book added successfully!'
        });
      }
      this.resetForm();
      // Close both modals if present
      const modalAdd = document.getElementById('my_modal_5') as HTMLDialogElement;
      if (modalAdd) modalAdd.close();
      const modalUpdate = document.getElementById('my_modal_6') as HTMLDialogElement;
      if (modalUpdate) modalUpdate.close();
    }
  }

  resetForm() {
    this.newBook = {
      title: '',
      author: '',
      year: undefined,
      genre: '',
      src: ''
    };
  }
}
