# Mohit.dev — Portfolio Website

Modern portfolio and landing page built to showcase freelance web development services for local businesses such as dental clinics, travel agencies, and law firms.

The website is designed with a strong focus on **conversion, performance, and SEO**, helping potential clients quickly understand the value of working with me.

---

## Live Website

```
https://yourdomain.com
```

---

## Tech Stack

* **Next.js 14 (App Router)**
* **TypeScript**
* **TailwindCSS**
* **Firebase Firestore** — Lead capture
* **React Hook Form + Zod** — Form validation
* **Lucide Icons**
* **Next/Image optimization**

---

## Features

### Portfolio Showcase

Displays recent website projects designed for local businesses.

### Lead Capture Form

Contact form connected to **Firebase Firestore** to store potential client inquiries.

### WhatsApp Conversion CTA

Quick contact button that opens WhatsApp with a pre-filled message.

### Performance Optimized

* Image optimization via Next.js
* Minimal JS footprint
* Lazy loading

### SEO Optimized

The project includes full technical SEO implementation:

* Metadata configuration
* OpenGraph previews
* Twitter cards
* JSON-LD structured data
* Sitemap generation
* Robots.txt
* Proper heading hierarchy
* Semantic HTML

---

## SEO Setup

The website includes structured data using **Schema.org ProfessionalService**.

This helps search engines understand the services offered and improves visibility for queries like:

```
dentist website developer
travel agency website design
small business website developer
```

Technical SEO files included:

```
/app/robots.ts
/app/sitemap.ts
/app/layout.tsx (metadata + OG + JSON-LD)
```

---

## Open Graph Image

A custom **1200 × 630 OG image** is included so the website displays a clean preview when shared on:

* WhatsApp
* LinkedIn
* Twitter
* Slack
* Discord

```
/public/og-image.png
```

---

## Project Structure

```
/app
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts

/components
  Navbar.tsx
  Services.tsx
  FeaturedProjects.tsx
  Contact.tsx
  Footer.tsx

/lib
  firebase.ts
  schemas/
  services/

/public
  og-image.png
  favicon-16x16.png
  favicon-32x32.png
```

---

## Local Development

Clone the repository:

```
git clone https://github.com/yourusername/portfolio
```

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

These variables configure Firebase Firestore for lead storage.

---

## Deployment

The site is optimized for deployment on **Vercel**.

```
npm run build
```

Then deploy via Vercel dashboard or CLI.

---

## Author

Mohit Singh
Freelance Web Developer

GitHub

```
https://github.com/mohitsingh200429-max
```

LinkedIn

```
https://www.linkedin.com/in/mohit-kumar-796616235
```

---

## License

This project is for portfolio demonstration purposes.
