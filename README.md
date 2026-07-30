# Domestic Dial — Website

React site for **Domestic Dial** (design to relocation home services across Zirakpur, Chandigarh, Mohali & Panchkula).

## Stack

- React 18 + TypeScript + Vite
- React Router
- [Lucide React](https://lucide.dev/) icons
- Outfit + Cormorant Garamond (Google Fonts)

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Customize

- **Service pillars (homepage opener)**: `src/data/servicePillars.ts` + `src/components/ServicePillars.tsx`
- **Specialist services grid**: `src/data/domesticDialServices.ts` + `src/components/ServicesShowcase.tsx`
- **Shading Solutions**: redirects to [chhayashading.com](https://chhayashading.com/) via `externalUrl` on that pillar
- **SEO / phone / WhatsApp**: `src/data/siteSeo.ts`
- **Brand colors**: CSS variables in `src/index.css` (`--color-accent`, etc.)
- **Video testimonials**: `src/components/VideoTestimonials.tsx`
- **Instagram**: `src/components/InstagramReels.tsx`

## Homepage flow

1. Service pillars (5 categories)
2. Contact bar
3. About
4. Specialist services grid (9 services)
5. Four-step journey (Dream → Build → Protect → Move)
6. Why Domestic Dial
7. Client quotes, videos, Instagram, FAQs
8. Contact / partners + floating WhatsApp
