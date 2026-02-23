import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, ContactComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  callForAppointment(): void {
    const phone = '+918459323304';
    window.location.href = `tel:${phone}`;
  }
}
