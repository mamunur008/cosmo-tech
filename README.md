# Cosmo Tech

Static corporate website built with Nuxt 4 and Tailwind CSS 4.

## Setup

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Generate a fully static deployment with `npm run generate`. The output is written to `.output/public`.

## Structure

- `app/pages` - public routes
- `app/components` - reusable UI components
- `app/data/site.ts` - typed static content
- `app/assets/css/main.css` - Tailwind v4 theme and shared styles
- `public/assets` - logo and leadership photography

The contact form is intentionally static. Connect it to an email, CRM, server API, Netlify Forms, or another provider before launch.
