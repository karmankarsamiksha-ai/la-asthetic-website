# La Asthetic – Aesthetic Dermatology Website

Angular single-page application for an aesthetic dermatology practice. Includes home, about, services, **book appointment**, and contact pages with a clean, professional design.

## Folder structure

```
Dermat Website/
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── layout/
│   │   │   ├── header/     # Header + nav
│   │   │   └── footer/     # Footer
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   ├── about/
│   │   │   ├── services/
│   │   │   ├── book-appointment/   # Booking form
│   │   │   └── contact/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css         # Global CSS variables + base styles
├── angular.json
├── package.json
└── tsconfig.json
```

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). Book appointment page: [http://localhost:4200/book-appointment](http://localhost:4200/book-appointment).

## Build

```bash
npm run build
```

Output is in `dist/aesthetic-dermatology/browser/`.

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick deploy options:**
- **Vercel** (Recommended): Connect GitHub repo → Auto-deploy
- **Netlify**: Connect GitHub repo → Auto-deploy
- **Firebase Hosting**: Use Firebase CLI
- **GitHub Pages**: Use angular-cli-ghpages

All configuration files are already set up! Just connect your repository.

## Features

- **Home** – Hero, intro, services preview, CTA
- **About** – Philosophy and approach
- **Services** – Full list of treatments
- **Book Appointment** – Form (name, email, phone, service, date/time, message) with success state
- **Contact** – Contact form and address/phone/email
- Responsive layout, sticky header, mobile menu
- Shared CSS variables (cream, ivory, charcoal, gold) and typography (Cormorant Garamond + Outfit)
