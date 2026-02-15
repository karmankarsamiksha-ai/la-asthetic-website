import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services = [
    {
      title: 'Injectables & Neuromodulators',
      description: 'Botox®, Dysport®, and Xeomin® for fine lines and dynamic wrinkles. Natural-looking results tailored to your face.',
      icon: '◆',
    },
    {
      title: 'Dermal Fillers',
      description: 'Hyaluronic acid fillers for volume restoration, lip enhancement, and contouring. Reversible and customizable.',
      icon: '◆',
    },
    {
      title: 'Laser Resurfacing',
      description: 'Fractional and ablative lasers for texture, scars, and sun damage. We offer multiple modalities for different skin types.',
      icon: '◆',
    },
    {
      title: 'IPL & Pigment Correction',
      description: 'Intense pulsed light and targeted lasers for sun spots, melasma, and vascular concerns.',
      icon: '◆',
    },
    {
      title: 'Chemical Peels',
      description: 'Medical-grade peels from light to deep, for clarity, acne, and rejuvenation.',
      icon: '◆',
    },
    {
      title: 'Facials & Hydration',
      description: 'Customized facials, microneedling, and infusion treatments for glow and hydration.',
      icon: '◆',
    },
    {
      title: 'Body Contouring',
      description: 'Non-invasive body sculpting and skin tightening for stubborn areas.',
      icon: '◆',
    },
    {
      title: 'Skin Cancer Screening',
      description: 'Full-body skin exams and mole checks for early detection and peace of mind.',
      icon: '◆',
    },
  ];
}
