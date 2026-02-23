import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  phoneNumber: string;

  constructor() {
    this.phoneNumber = '+1-234-567-890'; // Example phone number
  }

  callForAppointment() {
    // Logic for handling appointment calls
    console.log(`Calling for appointment at ${this.phoneNumber}`);
  }
}