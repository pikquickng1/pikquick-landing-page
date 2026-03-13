# PikQuick Landing Page

A modern, responsive marketing landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 15 App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Reusable component architecture
- ✅ Accessible UI components
- ✅ Production-ready waitlist integration with Supabase
- ✅ Secure API routes with validation
- ✅ Spam protection with honeypot field

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up the waitlist (optional):
   - See [QUICKSTART.md](QUICKSTART.md) for 5-minute setup
   - Or [WAITLIST_SETUP.md](WAITLIST_SETUP.md) for detailed guide

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/
│   │   └── Button.tsx      # Reusable button component
│   ├── layout/
│   │   └── Header.tsx      # Header with navigation
│   └── sections/
│       └── HeroSection.tsx # Hero section
├── public/
│   ├── logo.png            # PikQuick logo
│   └── hero-image.jpg      # Hero section image
└── ...config files

```

## Components

### Button Component
Reusable button with variants (primary, secondary, outline) and sizes (sm, md, lg).

### Header Component
Sticky header with responsive navigation and mobile menu.

### Hero Section
Full-screen hero with headline, description, CTA, and image.

### Waitlist Integration
Production-ready waitlist form with:
- Supabase backend integration
- Server-side validation with Zod
- Spam protection (honeypot field)
- Duplicate email detection
- UTM tracking
- User agent capture
- Success/error states

See [QUICKSTART.md](QUICKSTART.md) to get started.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Place your logo as `logo.png` in the `public` folder
- Place your hero image as `hero-image.jpg` in the `public` folder
- Update SEO metadata in `app/layout.tsx`
- Customize colors in `tailwind.config.ts`
