import { Book } from './../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent} from '../book-form/book-form.component'
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  BookFormComponent,
  SweetAlert2Module
];



