// .... existing imports

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  phoneNumber: string = '123-456-7890'; // Example phone number

  constructor() { }

  callForAppointment() {
    // Logic for calling for an appointment
    console.log(`Calling for an appointment at ${this.phoneNumber}`);
  }
}