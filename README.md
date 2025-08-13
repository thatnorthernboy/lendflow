# Help a Business — Landing (Next.js + Vercel)

Pilot landing page with AR/FR i18n, Tailwind, forms → Airtable (+ Brevo), GA4/Meta Pixel, SEO, and performance-first sections.

## Quick start

```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local  # fill keys
pnpm dev
```

Open http://localhost:3000/fr or /ar

## Sections included
- Hero (trust badges + CTAs)
- How it works (3 steps)
- Featured entrepreneur (with lightweight progress bar)
- Social proof
- Benefits grid
- FAQ
- Footer
- (Forms) Donor & Entrepreneur components ready to drop anywhere

To render forms on the homepage, add `<DonorForm />` and `<EntrepreneurForm />` into `app/[locale]/page.tsx` where you want them.

## Integrations

- **Airtable REST API** via `lib/airtable.ts`. Configure `AIRTABLE_API_KEY` and `AIRTABLE_BASE_ID`. Default table names match the CSV templates in `/integrations/airtable-templates`.
- **Brevo** (optional): add `BREVO_API_KEY` + `BREVO_LIST_ID` to upsert donor contacts.
- **GA4** and **Meta Pixel** snippets are included in layout and will activate when public env vars are present.
- **hCaptcha** server verification is wired; add the site widget to forms on the client and pass token into the hidden input.

## i18n

- `next-intl` with locales `fr` (default) and `ar`. Messages live in `/messages`.
- RTL is enabled automatically for Arabic in `app/[locale]/layout.tsx`.

## Styling

- Tailwind + brand palette (`deepblue`, `gold`, `greenbrand`, `terracotta`). See `styles/globals.css` for utilities.
- Poppins via `next/font`.

## Deploy

- Create a Vercel project; set env vars from `.env.local`.
- Ensure `middleware.ts` is enabled. Build command: `next build`.

## Events (for analytics)

- Track CTA clicks, form starts, and submits in client as needed using your own instrumentation or by expanding `lib/analytics.ts`.

---

Generated on 2025-08-11.
