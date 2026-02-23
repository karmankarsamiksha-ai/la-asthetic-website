import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FORMSPREE_FORM_ID } from '../../app.config.formspree';

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
  submitting = false;
  submitError: string | null = null;
  isFormspreeNotConfigured = false;
  readonly phoneNumber = '+918459323304';

  constructor(private http: HttpClient) {}

  callForAppointment(): void {
    const phone = this.phoneNumber;

    if (navigator && 'clipboard' in navigator) {
      try {
        void navigator.clipboard.writeText(phone);
      } catch {
        // Ignore clipboard errors and still try to open dialer
      }
    }

    window.location.href = `tel:${phone}`;
  }

  onSubmit(): void {
    if (this.submitting) return;

    if (FORMSPREE_FORM_ID === null) {
      this.submitError =
        'Form is not configured yet. Until you add your Formspree form ID in src/app/app.config.formspree.ts, please email us at laaesthetiqueshlclinic10@gmail.com or call 91 84593 23304.';
      this.isFormspreeNotConfigured = true;
      return;
    }

    this.submitError = null;
    this.isFormspreeNotConfigured = false;
    this.submitting = true;

    const body = {
      _subject: this.model.subject
        ? `Contact: ${this.model.subject}`
        : `Contact from ${this.model.name}`,
      _replyto: this.model.email,
      name: this.model.name,
      email: this.model.email,
      subject: this.model.subject || '—',
      message: this.model.message,
    };

    const url = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

    this.http.post(url, body, { responseType: 'json' }).subscribe({
      next: () => {
        this.submitted = true;
        this.submitting = false;
      },
      error: (err) => {
        this.submitting = false;
        this.submitError =
          err?.error?.error ||
          err?.message ||
          'Could not send. Please email us at laaesthetiqueshlclinic10@gmail.com';
      },
    });
  }
}