import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FORMSPREE_FORM_ID } from '../../app.config.formspree';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css'],
})
export class BookAppointmentComponent {
  model = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  };

  submitted = false;
  submitting = false;
  submitError: string | null = null;
  isFormspreeNotConfigured = false;

  serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'acne', label: 'Acne & Acne Scar Treatment' },
    { value: 'hair', label: 'Hair Regrowth Therapy (GFC, Laser cap, Duta, Hair 360)' },
    { value: 'nail', label: 'Nail Infections & Nail Deformity (Laser)' },
    { value: 'oral', label: 'Oral Lesion Treatment' },
    { value: 'std', label: 'Sexually Transmitted Diseases' },
    { value: 'tattoo', label: 'Tattoo Removal' },
    { value: 'piercing', label: 'Ear & Nose Piercing' },
    { value: 'skin-diseases', label: 'Skin Diseases (Psoriasis, Vitiligo, Infections)' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'other', label: 'Other' },
  ];

  timeSlots = [
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM',
    '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM',
  ];

  constructor(private http: HttpClient) {}

  getServiceLabel(value: string): string {
    const opt = this.serviceOptions.find((o) => o.value === value);
    return opt ? opt.label : value || '—';
  }

  onSubmit(): void {
    if (this.submitting) return;

    if (FORMSPREE_FORM_ID === null) {
      this.submitError =
        'Form is not configured yet. Until you add your Formspree form ID, please book by calling 91 84593 23304 or emailing laaesthetique4@gmail.com.';
      this.isFormspreeNotConfigured = true;
      return;
    }

    this.submitError = null;
    this.isFormspreeNotConfigured = false;
    this.submitting = true;

    const serviceLabel = this.getServiceLabel(this.model.service);
    const body = {
      _subject: `New appointment request – ${this.model.firstName} ${this.model.lastName}`,
      _replyto: this.model.email,
      firstName: this.model.firstName,
      lastName: this.model.lastName,
      email: this.model.email,
      phone: this.model.phone,
      service: serviceLabel,
      preferredDate: this.model.preferredDate || '—',
      preferredTime: this.model.preferredTime || '—',
      message: this.model.message || '—',
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
          'Something went wrong. Please call us or email laaesthetique4@gmail.com to book.';
      },
    });
  }
}
