import { Component } from '@angular/core';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-hero-section',
  imports: [ NgxTypewriterComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
  words = ['add books',
    'update your collection',
    'delete unwanted books',
    'search your library',
    'share with friends'];

}
