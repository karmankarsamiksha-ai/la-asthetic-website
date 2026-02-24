import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, FooterComponent,ReviewsComponent,HttpClientModule],
  template: `
    <app-header />
    <main class="main-content">
      <router-outlet />
    </main>
    <nav class="mobile-cta" aria-label="Quick actions">
      <a class="btn btn-primary mobile-cta-btn" href="tel:+918459323304">Call now</a>
    </nav>
    <app-footer />
  `,
  styles: [`
    .main-content {
      min-height: calc(100vh - 180px);
    }

    .mobile-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;   /* center the button */
  align-items: center;

  padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.05);
}

/* BUTTON */
.mobile-cta-btn {
  width: 100%;
  max-width: 500px;   /* prevents it from stretching too wide */
  height: 50px;

  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hide on tablet & desktop */
@media (min-width: 768px) {
  .mobile-cta {
    display: none;
  }
}

/* Add space so content doesn’t hide behind CTA */
@media (max-width: 767.98px) {
  .main-content {
    padding-bottom: 80px;
  }
}

  `],
})
export class AppComponent {}
