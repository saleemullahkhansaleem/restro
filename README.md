# RESTRO Website — Next.js

Marketing website for **RESTRO** by Creative Garage. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Base styles, CSS variables, scroll reveal
│   ├── layout.tsx         # Root layout + metadata + font import
│   └── page.tsx           # Main page — composes all sections
│
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile menu
│   ├── Footer.tsx         # Minimal footer
│   └── sections/
│       ├── HeroSection.tsx     # Split hero with live floor view animation
│       ├── FeaturesSection.tsx # 9 module cards (3-column grid)
│       ├── WhySection.tsx      # 6 why-cards on dark purple background
│       ├── PricingSection.tsx  # Setup + Monthly subscription cards
│       └── ContactSection.tsx  # Contact form + company details
│
└── lib/
    ├── data.ts            # All content/copy in one place — edit here
    └── useScrollReveal.ts # IntersectionObserver hook for reveal animations
```

---

## Adding the Logo

1. Place your logo files in `/public/`:
   - `logo.svg` — dark version (for the light navbar)
   - `logo-white.svg` — white/light version (for the dark footer)

2. In `src/components/Navbar.tsx`, replace the `{/* LOGO PLACEHOLDER */}` div with:
   ```tsx
   import Image from 'next/image'
   <Image src="/logo.svg" alt="RESTRO by Creative Garage" width={140} height={36} />
   ```

3. In `src/components/Footer.tsx`, do the same with `logo-white.svg`.

---

## Editing Content

All copy lives in `src/lib/data.ts`:
- `FEATURES` — all 9 module cards (icon, title, description, bullets)
- `WHY_CARDS` — the 6 "Why RESTRO" cards
- `MONTHLY_ITEMS` — pricing breakdown rows
- `CONTACT_DETAILS` — address, phone, email, website
- `NAV_LINKS` — navigation items

---

## Contact Form

The form in `ContactSection.tsx` currently simulates a submit with a timeout.
To wire it up, replace the `setTimeout` block with a real API call:

```ts
// Option A: Next.js API route
const res = await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' },
})

// Option B: EmailJS, Formspree, Resend, etc.
```

---

## Deployment

```bash
npm run build   # type-checks + builds
npm run start   # production server
```

Or deploy directly to **Vercel** — just push to GitHub and connect the repo.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 14.2.5 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Fonts | Syne (display) + DM Sans (body) |
