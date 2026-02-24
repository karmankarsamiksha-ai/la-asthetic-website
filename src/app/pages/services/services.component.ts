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
  callForAppointment(): void {
    const phone = '+918459323304';
    window.location.href = `tel:${phone}`;
  }
  services = [
    {
      title: 'Acne & Acne Scar Treatment',
      description: 'Medical-grade solutions for active acne and post-acne scarring using chemical peels, dermaroller, microneedling, and laser therapies. We tailor the protocol to your skin type and severity for clearer, smoother skin with minimal downtime.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/6475987/pexels-photo-6475987.jpeg?_gl=1*2f5u72*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjIwNjYkajI4JGwwJGgw',
      imageAlt: 'Dermatology consultation for acne and scars',
    },
    {
      title: 'Hair Regrowth Therapy',
      description: 'Evidence-based treatments for hair loss and thinning: GFC (Growth Factor Concentrate), Laser Cap (LLLT), Duta injections, Hair 360, and personalised regimens. We address androgenetic alopecia, telogen effluvium, and other causes for visible regrowth and density.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/13899821/pexels-photo-13899821.jpeg?_gl=1*1geszya*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjIyNTckajQyJGwwJGgw',
      imageAlt: 'Hair and scalp assessment for regrowth therapy',
    },
    {
      title: 'Nail Infections & Laser Therapy',
      description: 'Laser treatment for stubborn fungal nail infections (onychomycosis) and management of nail deformity. Safe, effective, and suitable for nails that have not responded to topical or oral therapy.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/5069507/pexels-photo-5069507.jpeg?_gl=1*1dbxvf6*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjIzODkkajUzJGwwJGgw',
      imageAlt: 'Clinical dermatology care and treatment',
    },
    {
      title: 'Oral Lesion Treatment',
      description: 'Diagnosis and treatment of oral mucosal conditions, including benign lesions, ulcers, and suspicious changes. We provide careful evaluation and appropriate medical or procedural care for oral health and peace of mind.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/6627524/pexels-photo-6627524.jpeg?_gl=1*k58ysp*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjI0OTckajE0JGwwJGgw',
      imageAlt: 'Doctor consultation and medical evaluation',
    },
    {
      title: 'Sexually Transmitted Diseases',
      description: 'Confidential, non-judgmental screening, diagnosis, and treatment of sexually transmitted infections. We offer evidence-based care with emphasis on privacy and follow-up.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/7088833/pexels-photo-7088833.jpeg?_gl=1*1hnhn63*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjI2MTIkajQ4JGwwJGgw',
      imageAlt: 'Private, professional medical consultation',
    },
    {
      title: 'Tattoo Removal',
      description: 'Laser tattoo removal using advanced Q-switched and picosecond lasers for safe, progressive fading of unwanted ink. Treatment plans are customised to tattoo size, colours, and skin type for optimal results.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/10822254/pexels-photo-10822254.jpeg?_gl=1*1p7pn96*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjI2ODQkajM4JGwwJGgw',
      imageAlt: 'Laser treatment procedure in a clinic',
    },
    {
      title: 'Ear & Nose Piercing',
      description: 'Sterile, professional ear and nose piercing performed in a clinical setting. We use high-quality jewellery and strict hygiene protocols for a safe, comfortable experience.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/19550803/pexels-photo-19550803.jpeg?_gl=1*nbloey*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjI3MjkkajUzJGwwJGgw',
      imageAlt: 'Sterile clinic tools and hygiene',
    },
    {
      title: 'Treatment of All Skin Diseases',
      description: 'Comprehensive care for chronic and acute skin conditions: psoriasis, vitiligo, lichen planus, and fungal, bacterial, and viral skin infections. We combine accurate diagnosis with tailored medical and procedural treatment for long-term control and improved quality of life.',
      icon: '◆',
      imageUrl: 'https://images.pexels.com/photos/29648624/pexels-photo-29648624.jpeg?_gl=1*m3hsrb*_ga*NDg0NjgxNDEyLjE3NzE5MjIwMzQ.*_ga_8JE65Q40S6*czE3NzE5MjIwMzQkbzEkZzEkdDE3NzE5MjI3NzUkajckbDAkaDA.',
      imageAlt: 'Dermatology clinic care and skin health support',
    },
  ];
}
