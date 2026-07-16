# Project Encore

Premium static website for 2HD (2nd Hand Daylight), built with Next.js, React, TypeScript, and Tailwind CSS for deployment to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build exports a static site to `out/`, ready for GitHub Pages.

## Content To Replace

- Add the real promo video at `public/assets/video/promo.mp4`.
- Replace `public/assets/images/hero-stage.png` with the chosen 2HD hero image or video poster.
- Add curated gallery images under `public/assets/images/`.
- Update social links and booking email in `data/site.ts`.
- Update gigs in `data/site.ts` until the TimeTree/Google Calendar integration is ready.

## Deployment

The included GitHub Actions workflow builds and deploys the static export to GitHub Pages.

The `public/CNAME` file points GitHub Pages at:

```text
2hdband.co.uk
```
