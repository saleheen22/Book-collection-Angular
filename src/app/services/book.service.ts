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
    year: 2021, genre: 'Fiction',
    src:'https://blog.journey.cloud/content/images/size/w2000/2022/12/atomic-habits-an-easy-proven-way-to-build-good-habits-break-bad-ones-by-james-clear.png'
    },
    {id: 2, title: 'Book 2',
      author: 'Author 2',
      year: 2022, genre: 'Non-Fiction',
      src: 'https://images.squarespace-cdn.com/content/v1/596a07c029687fd47a2d41cc/1599580703910-PW7SW53AR18AHSC16PSD/Adjustments.jpeg?format=2500w'
      },
      {id: 3, title: 'Book 3',
        author: 'Author 3',
        year: 2022, genre: 'Non-Fiction',
        src: "https://media.licdn.com/dms/image/v2/D5622AQFrz5lwEqxOQw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1723294490699?e=1747872000&v=beta&t=H_WjU-HEJHFAHA_wAGQYFfn0iFYHyifX8hSss2CT7yE"
        },
        {id: 4, title: 'Book 4',
          author: 'Author 4',
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

