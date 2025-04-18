import { SHARED_IMPORTS } from '../components/shared/shared.imports';
import { Book } from './../models/book';
import { Injectable, signal } from '@angular/core';


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
      {id: 3, title: 'Book 2',
        author: 'Author 2',
        year: 2022, genre: 'Non-Fiction'
        },
        {id: 4, title: 'Book 2',
          author: 'Author 2',
          year: 2022, genre: 'Non-Fiction'
          }
  ])
  nextId = signal(5);
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
  updateBook(id: number, changes: Partial<Book>) {
    this.books.update(books =>
      books.map(book =>
        book.id === id ? { ...book, ...changes } : book
      )
    );
  }

  deleteBook(id: number) {
    this.books.update(books =>
      books.filter(book => book.id !== id)
    );

    console.log(this.books());
}
  }

