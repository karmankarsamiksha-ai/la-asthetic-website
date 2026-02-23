import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ReviewsComponent } from '../../reviews/reviews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home-hero.css','./home-carousel.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  carouselIndex = 0;
  private carouselTimer: ReturnType<typeof setInterval> | null = null;

  readonly carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Woman receiving professional skin treatment at dermatology clinic',
    },
    {
      url:'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Woman receiving professional skin facial at dermatology clinic',
    }
  ];

  ngOnInit(): void {
    this.carouselTimer = setInterval(() => this.carouselNext(), 10000);
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) clearInterval(this.carouselTimer);
  }

  carouselNext(): void {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselImages.length;
  }

  carouselPrev(): void {
    this.carouselIndex =
      (this.carouselIndex - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  carouselGoTo(index: number): void {
    this.carouselIndex = index;
  }

  trackByUrl(_index: number, item: { url: string }): string {
    return item.url;
  }
  callForAppointment(): void {
    const phone = '+918459323304';
    window.location.href = `tel:${phone}`;
  }
}
