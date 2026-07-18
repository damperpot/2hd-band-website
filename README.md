# Project Encore

Premium static website for 2HD (2nd Hand Daylight), built with Next.js, React, TypeScript, and Tailwind CSS for deployment to GitHub Pages.

## Calendar Data

The public Upcoming Shows section reads `data/2hd-gigs-remaining-2026.json`. This file is reviewed from the band's TimeTree export and includes public/private status so private functions remain hidden from visitors.

The separate 2HD calendar analyser produces both the internal report and
`data/2hd-availability.json`, the privacy-safe source for the public Friday-to-Sunday calendar.
Only the date and one of `available`, `check`, or `unavailable` is published. Member names,
holidays, event titles and reasons must never be copied into public website data.

Selecting a green or amber date on the website prefills the booking form. The weekly TimeTree
sync regenerates this public file and deploys it only when availability has changed.

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
- Review public/private gig labels when new TimeTree naming patterns are introduced.

## Deployment

The included GitHub Actions workflow builds and deploys the static export to GitHub Pages.

The `public/CNAME` file points GitHub Pages at:

```text
2hdband.co.uk
```
