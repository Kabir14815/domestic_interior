# Domestic Dial — Single-page website

Minimal, mobile-first React landing page for **Domestic Dial** (complete home project management).

## Stack

- React 18 + TypeScript + Vite
- [Lucide React](https://lucide.dev/) icons
- DM Sans (Google Fonts)

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

- **Hero video**: Edit `src/components/Hero.tsx` — replace `src` / `poster` with your own assets.
- **Before/after images**: Edit `beforeAfterSlides` in `src/components/Gallery.tsx`.
- **Video testimonials**: Replace URLs in `src/components/VideoTestimonials.tsx` with real client clips.
- **Instagram**: Update `@domesticdial` links in `src/components/InstagramReels.tsx` to your handle.
- **WhatsApp**: Number is in `src/components/WhatsAppButton.tsx` (`919255045552` = India +91).
- **Brand color**: Change `--color-accent` in `src/index.css`.

## Sections (Urban Company–style flow)

1. Fixed header + hero (video + CTAs)
2. Four-step journey (Dream → Build → Protect → Move)
3. Before/after slider + project carousel
4. Video testimonials
5. Instagram Reels CTA
6. Why us + footer + floating WhatsApp
