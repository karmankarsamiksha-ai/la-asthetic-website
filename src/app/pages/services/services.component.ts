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
      title: 'Acne & Acne Scar Treatment',
      description: 'Medical-grade solutions for active acne and post-acne scarring using chemical peels, dermaroller, microneedling, and laser therapies. We tailor the protocol to your skin type and severity for clearer, smoother skin with minimal downtime.',
      icon: '◆',
    },
    {
      title: 'Hair Regrowth Therapy',
      description: 'Evidence-based treatments for hair loss and thinning: GFC (Growth Factor Concentrate), Laser Cap (LLLT), Duta injections, Hair 360, and personalised regimens. We address androgenetic alopecia, telogen effluvium, and other causes for visible regrowth and density.',
      icon: '◆',
    },
    {
      title: 'Nail Infections & Laser Therapy',
      description: 'Laser treatment for stubborn fungal nail infections (onychomycosis) and management of nail deformity. Safe, effective, and suitable for nails that have not responded to topical or oral therapy.',
      icon: '◆',
    },
    {
      title: 'Oral Lesion Treatment',
      description: 'Diagnosis and treatment of oral mucosal conditions, including benign lesions, ulcers, and suspicious changes. We provide careful evaluation and appropriate medical or procedural care for oral health and peace of mind.',
      icon: '◆',
    },
    {
      title: 'Sexually Transmitted Diseases',
      description: 'Confidential, non-judgmental screening, diagnosis, and treatment of sexually transmitted infections. We offer evidence-based care with emphasis on privacy and follow-up.',
      icon: '◆',
    },
    {
      title: 'Tattoo Removal',
      description: 'Laser tattoo removal using advanced Q-switched and picosecond lasers for safe, progressive fading of unwanted ink. Treatment plans are customised to tattoo size, colours, and skin type for optimal results.',
      icon: '◆',
    },
    {
      title: 'Ear & Nose Piercing',
      description: 'Sterile, professional ear and nose piercing performed in a clinical setting. We use high-quality jewellery and strict hygiene protocols for a safe, comfortable experience.',
      icon: '◆',
    },
    {
      title: 'Treatment of All Skin Diseases',
      description: 'Comprehensive care for chronic and acute skin conditions: psoriasis, vitiligo, lichen planus, and fungal, bacterial, and viral skin infections. We combine accurate diagnosis with tailored medical and procedural treatment for long-term control and improved quality of life.',
      icon: '◆',
    },
  ];
}
