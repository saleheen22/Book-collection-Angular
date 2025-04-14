import { Book } from './../models/book';
import { Injectable, signal } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  books = signal<Book[]>([
    {id: 1, title: 'Book 1',
    author: 'Author 1',
    year: 2021, genre: 'Fiction'
    },
    {id: 2, title: 'Book 2',
      author: 'Author 2',
      year: 2022, genre: 'Non-Fiction'
      },
      {id: 2, title: 'Book 2',
        author: 'Author 2',
        year: 2022, genre: 'Non-Fiction'
        },
        {id: 2, title: 'Book 2',
          author: 'Author 2',
          year: 2022, genre: 'Non-Fiction'
          }
  ])
  nextId = signal(1);
  getBooks(){
    return this.books();
  }
  createBook(book: Omit<Book, 'id'>) {
    const newId = this.nextId();
    this.books.update((books)=> [
      ...books,
      {...book, id: newId}
    ]);
    this.nextId.update(id => id + 1);

  }
  deleteBook(id: number) {
    this.books.update(books =>
      books.filter(book => book.id !== id)
    );
  }
}
