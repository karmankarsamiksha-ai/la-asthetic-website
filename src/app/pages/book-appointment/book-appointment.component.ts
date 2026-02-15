import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  serviceOptions = [
    { value: '', label: 'Select a service' },
    { value: 'consultation', label: 'New Patient Consultation' },
    { value: 'injectables', label: 'Injectables & Neuromodulators' },
    { value: 'fillers', label: 'Dermal Fillers' },
    { value: 'laser', label: 'Laser Resurfacing' },
    { value: 'ipl', label: 'IPL & Pigment Correction' },
    { value: 'peels', label: 'Chemical Peels' },
    { value: 'facial', label: 'Facials & Hydration' },
    { value: 'body', label: 'Body Contouring' },
    { value: 'screening', label: 'Skin Cancer Screening' },
    { value: 'other', label: 'Other' },
  ];

  timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
  ];

  onSubmit(): void {
    this.submitted = true;
    console.log('Booking request:', this.model);
    // In production: send to API, show success message, redirect, etc.
  }
}
