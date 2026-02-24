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
      name: 'Nishant Kolhatkar',
      avatarText: 'NK',
      time: 'Review from Google',
      rating: 5,
      text: 'I had a great experience with Dr. Pradnya for my skin and hair treatment. She patiently listened to my concerns, explained everything clearly, and suggested the right treatment plan. After one week, I already see improvement. The clinic is clean and well-maintained, and the staff is polite. Highly recommend for anyone looking for a dermatologist, hair loss treatment, or skincare consultation.'},
    {
      name: 'Ajit Likhar',
      avatarText: 'AL',
      time: 'Review from Google',
      rating: 5,
      text: 'Good doctor. She is very simple and gentle in his behavior. She will give sufficient time to each patient. She studies the patient and disease meticulously. We can freely interact with the doctor.' },
    {
      name: 'Navin Bais',
      avatarText: 'NB',
      time: 'Review from Google ',
      rating: 5,
      text: 'I am taking treatment from Dr pradnya mam for acne .. and got good results .. she explains everything in detail and clearly ... She is very knowledgeable and best doctor.. thank you doctor ... I highly recommend her .... Happy with the results'  },
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
