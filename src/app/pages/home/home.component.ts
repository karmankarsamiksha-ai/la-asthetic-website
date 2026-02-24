import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ReviewsComponent } from '../../reviews/reviews.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ContactComponent, ReviewsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home-hero.css','./home-carousel.css'],
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  carouselIndex = 0;
  private carouselTimer: ReturnType<typeof setInterval> | null = null;
  private heroPointerId: number | null = null;
  private heroStartX = 0;
  private heroStartY = 0;
  private heroDeltaX = 0;
  private heroSwipeLocked: 'none' | 'x' | 'y' = 'none';

  @ViewChild('videoTrack', { static: false }) videoTrackRef?: ElementRef<HTMLDivElement>;
  videoActiveIndex = 0;
  private videoScrollRaf = 0;

  readonly videoReels: {
    id: string;
    title: string;
    topic: string;
    permalink: string;
    embedUrl: SafeResourceUrl;
  }[];

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

  constructor(private sanitizer: DomSanitizer) {
    const baseReels = [
      {
        id: 'DNx-YRT2IeB',
        title: 'IRIS blue toning',
        topic: 'Laser & toning',
      },
      {
        id: 'DSt4L5VDA9d',
        title: 'Patient transformation',
        topic: 'Results & reviews',
      },
      {
        id: 'DR8wo6NjHuF',
        title: 'Listening to patients',
        topic: 'Patient experience',
      },
      {
        id: 'DQHYBtDkgzh',
        title: 'Chemical peeling explained',
        topic: 'Skincare education',
      },
      {
        id: 'DODAqntkilQ',
        title: 'Dandruff and scalp care',
        topic: 'Hair & scalp',
      },
      {
        id: 'DO0UfxsjEO-',
        title: 'Skin tags treatment',
        topic: 'Procedures',
      },
    ];

    this.videoReels = baseReels.map((r) => ({
      ...r,
      permalink: `https://www.instagram.com/reel/${r.id}/`,
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.instagram.com/reel/${r.id}/embed`
      ),
    }));
  }

  ngOnInit(): void {
    this.carouselTimer = setInterval(() => this.carouselNext(), 10000);
  }

  ngAfterViewInit(): void {
    this.videoScrollToIndex(0, 'auto');
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

  heroSwipeStart(ev: PointerEvent): void {
    // Only handle touch/pen to avoid hijacking desktop dragging.
    if (ev.pointerType === 'mouse') return;

    this.heroPointerId = ev.pointerId;
    this.heroStartX = ev.clientX;
    this.heroStartY = ev.clientY;
    this.heroDeltaX = 0;
    this.heroSwipeLocked = 'none';
  }

  heroSwipeMove(ev: PointerEvent): void {
    if (this.heroPointerId === null || ev.pointerId !== this.heroPointerId) return;

    const dx = ev.clientX - this.heroStartX;
    const dy = ev.clientY - this.heroStartY;

    if (this.heroSwipeLocked === 'none') {
      // Decide intent early: horizontal swipe vs vertical scroll.
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        this.heroSwipeLocked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      }
    }

    if (this.heroSwipeLocked === 'x') {
      this.heroDeltaX = dx;
      // Prevent the page from scrolling while swiping images.
      ev.preventDefault();
    }
  }

  heroSwipeEnd(ev: PointerEvent): void {
    if (this.heroPointerId === null || ev.pointerId !== this.heroPointerId) return;

    const dx = this.heroDeltaX;
    this.heroSwipeCancel();

    // Swipe threshold tuned for phones.
    if (Math.abs(dx) < 45) return;

    if (dx < 0) {
      this.carouselNext();
    } else {
      this.carouselPrev();
    }
  }

  heroSwipeCancel(): void {
    this.heroPointerId = null;
    this.heroDeltaX = 0;
    this.heroSwipeLocked = 'none';
  }

  trackByUrl(_index: number, item: { url: string }): string {
    return item.url;
  }

  videoGoTo(index: number): void {
    this.videoScrollToIndex(index);
  }

  videoNext(): void {
    this.videoScrollToIndex(Math.min(this.videoActiveIndex + 1, this.videoReels.length - 1));
  }

  videoPrev(): void {
    this.videoScrollToIndex(Math.max(this.videoActiveIndex - 1, 0));
  }

  onVideoScroll(): void {
    cancelAnimationFrame(this.videoScrollRaf);
    this.videoScrollRaf = requestAnimationFrame(() => this.updateVideoIndexFromScroll());
  }

  private videoScrollToIndex(index: number, behavior: ScrollBehavior = 'smooth'): void {
    const track = this.videoTrackRef?.nativeElement;
    if (!track) return;

    const clamped = Math.max(0, Math.min(index, this.videoReels.length - 1));
    const card = track.children.item(clamped) as HTMLElement | null;
    if (!card) return;

    track.scrollTo({ left: card.offsetLeft, behavior });
    this.videoActiveIndex = clamped;
  }

  private updateVideoIndexFromScroll(): void {
    const track = this.videoTrackRef?.nativeElement;
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

    this.videoActiveIndex = nearestIndex;
  }

  callForAppointment(): void {
    const phone = '+918459323304';
    window.location.href = `tel:${phone}`;
  }
}
