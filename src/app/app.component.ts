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
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 50;
      display: flex;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      padding: 10px 12px calc(10px + env(safe-area-inset-bottom, 0px));
      background: rgba(255, 255, 255, 0.92);
      border-top: 1px solid rgba(61, 45, 50, 0.08);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .mobile-cta-btn {
      width: 90%;
      min-height: 48px;
      border-radius: 999px;
      box-shadow: var(--shadow-soft);
    }

    @media (min-width: 768px) {
      .mobile-cta {
        display: none;
      }
    }

    @media (min-width: 480px) and (max-width: 767.98px) {
      .main-content {
        padding-bottom: calc(76px + env(safe-area-inset-bottom, 0px));
      }
    }
    @media (max-width: 360px) {
      .mobile-cta-btn {
        font-size: 13px;
        padding: 0 8px;
      }
      .mobile-cta {
        gap: 8px;
        padding-left: 10px;
        padding-right: 10px;
      }
    }

  `],
})
export class AppComponent {}
