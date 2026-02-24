import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

type ReviewCard = {
  name: string;
  avatarText: string;
  time: string;
  rating: number;
  text: string;
};

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements AfterViewInit {
  @ViewChild('track', { static: true }) trackRef!: ElementRef<HTMLDivElement>;

  readonly reviews: ReviewCard[] = [
    {
      name: 'Rajnish Chandra',
      avatarText: 'RC',
      time: 'Review from Google · Recent visit',
      rating: 5,
      text: 'Dr. Pradnya explains every concern in detail and suggests only what is genuinely required. The staff is polite, the clinic is hygienic and I felt very comfortable throughout my treatment. Highly recommended for anyone looking for an honest dermatologist in Nagpur.',
    },
    {
      name: 'Shreya K',
      avatarText: 'SK',
      time: 'Review from Google · Acne & hair care',
      rating: 5,
      text: 'I have been taking treatment for acne and hair fall here and can already see a huge difference. She listens patiently, answers all questions and tailors the plan according to lifestyle and budget. The follow-up is very good and I always feel heard.',
    },
    {
      name: 'Pratiksha Patil',
      avatarText: 'PP',
      time: 'Review from Google · Skin & confidence',
      rating: 5,
      text: 'Best experience so far. My pigmentation and dark spots have reduced significantly and my skin feels healthier. Dr. Pradnya is very calm, friendly and never rushes the appointment. I feel much more confident about my skin now.',
    },
  ];

  activeIndex = 0;
  private scrollRaf = 0;

  ngAfterViewInit(): void {
    this.scrollToIndex(0, 'auto');
  }

  openGoogleReviews(): void {
    window.open(
      'https://www.google.com/maps/place/La+Aesthetique+(Skin+Hair+Laser+Clinic)/@21.085885,79.0902019,17z/data=!4m8!3m7!1s0x3bd4bf795f8591d9:0xf4e81e61d5ae78d3!8m2!3d21.085885!4d79.0927768!9m1!1b1!16s%2Fg%2F11vws7p1pt?entry=ttu',
      '_blank',
      'noopener,noreferrer'
    );
  }

  goTo(index: number): void {
    this.scrollToIndex(index);
  }

  next(): void {
    this.scrollToIndex(Math.min(this.activeIndex + 1, this.reviews.length - 1));
  }

  prev(): void {
    this.scrollToIndex(Math.max(this.activeIndex - 1, 0));
  }

  onScroll(): void {
    cancelAnimationFrame(this.scrollRaf);
    this.scrollRaf = requestAnimationFrame(() => this.updateActiveIndexFromScroll());
  }

  private scrollToIndex(index: number, behavior: ScrollBehavior = 'smooth'): void {
    const track = this.trackRef?.nativeElement;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, this.reviews.length - 1));
    const card = track.children.item(clamped) as HTMLElement | null;
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior });
    this.activeIndex = clamped;
  }

  private updateActiveIndexFromScroll(): void {
    const track = this.trackRef?.nativeElement;
    if (!track) return;

    const items = Array.from(track.children) as HTMLElement[];
    if (items.length === 0) return;

    const viewportCenter = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDist = Number.POSITIVE_INFINITY;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemCenter = item.offsetLeft + item.clientWidth / 2;
      const dist = Math.abs(itemCenter - viewportCenter);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = i;
      }
    }

    this.activeIndex = nearestIndex;
  }
}
