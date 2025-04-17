import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Export an array containing all common modules
export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

// You can also create separate groups if needed
export const FORM_IMPORTS = [
  FormsModule,
  ReactiveFormsModule
];
