# Cedar & Steam Cabins (demo)

A fictional three-cabin vacation rental in Lava Hot Springs, Idaho, built as a LavaTech Pro portfolio demo to pitch lodging and Airbnb hosts. Everything on the site is fictional, and a banner at the top plus the footer say so. Keep that disclosure.

## Stack

Vite + React + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`, theme tokens in the `@theme` block of `src/index.css`, no `tailwind.config.js`). Three.js via `@react-three/fiber` for the hero animation only.

## Commands

- `npm run dev`: local dev server
- `npm run build`: type-check (`tsc -b`) + production build to `dist/`
- `npm run preview`: serve the production build

## Structure

- `src/data.ts`: all site content. `src/data.ts` holds all content: `business`, `cabins` (rates, cleaning fees, amenities, image names, Airbnb/VRBO URLs), `perks`, `explore`, `reviews`, `faqs`, `photoCredits`. Edit data, not repeated JSX.
- `src/App.tsx`: assembles the sections. `App.tsx` owns the `BookingDraft` state (cabin, dates, guests). The hero search bar and each cabin's "Request to Book" button patch it and scroll to `#book`.
- `src/components/`: one component per section.
- `src/components/SteamScene.tsx`: soft steam wisps (Three.js sprites) rising over the hero photo. It is lazy-loaded with `React.lazy` so the page paints before three.js downloads, and it renders a single still frame when `prefers-reduced-motion` is set.
- `src/components/Img.tsx`: every photo in `public/images/` exists twice, `<name>.jpg` (2400px wide) and `<name>-sm.jpg` (1200px wide). `Img` serves both through `srcSet` so large/retina screens get full res and phones get the lighter file. Reference images by base name only (e.g. `name="deck"`).
- `public/images/`: Unsplash photos (free Unsplash License, never Unsplash+). New photos need both sizes: `https://images.unsplash.com/photo-<id>?w=2400&q=80&fm=jpg` and `?w=1200&q=75&fm=jpg`. Add the photographer to `photoCredits` in `src/data.ts`.

## Conventions

- Look: cream / pine green / ember orange, Fraunces (display) + Inter (body). Use the theme utilities (`bg-...`, `text-...`) instead of hardcoded colors.
- Features: Hero date search that prefills the booking form, cabin cards with photo galleries, a "Request to Book" form with a live price breakdown showing the booking-site fee a guest saves, secondary Airbnb/VRBO links per cabin, Explore Lava tiles, reviews, and an FAQ.
- Forms don't send anything. They show a confirmation with a "Demo note". For a real client, wire them to Formspree/Web3Forms or similar.
- No em dashes in site copy.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages at https://martwez.github.io/lodging-demo/. `base: '/lodging-demo/'` is set in `vite.config.ts` for the project subpath. Remove it if a custom domain is added.
