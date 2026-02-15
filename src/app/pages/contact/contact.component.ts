import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  model = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
    console.log('Contact form:', this.model);
  }
}
