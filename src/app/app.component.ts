import { FooterComponent } from './components/footer/footer.component';

import { BookListComponent } from './components/book-list/book-list.component';

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookListComponent, NavbarComponent, HeroSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-collection';
}
