import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../services/reviews.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  carouselIndex = 0;

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe({
      next: (data: any) => {
        if (data && data.result && data.result.reviews) {
          this.reviews = data.result.reviews;
        } else {
          console.warn('No reviews found in API response', data);
          this.reviews = [];
        }
      },
      error: (err) => {
        console.error('Error fetching reviews', err);
        this.reviews = [];
      }
    });
  }
  

  carouselGoTo(index: number) {
    this.carouselIndex = index;
  }

  nextSlide() {
    this.carouselIndex = (this.carouselIndex + 1) % this.reviews.length;
  }

  prevSlide() {
    this.carouselIndex = (this.carouselIndex - 1 + this.reviews.length) % this.reviews.length;
  }
}
