# joecavdesign.com — redesign

Static site. No build step needed to host it: upload this folder as-is.

## Preview on your Mac
Open Terminal in this folder and run:

    python3 -m http.server 8000

then visit http://localhost:8000. (Double-clicking index.html also works, but browsers block the self-hosted fonts on file:// pages.)

## Edit content
All copy, project lists, and image paths live in `src/content.mjs`. After editing, regenerate the pages:

    node src/build.mjs

Styles: `assets/css/site.css`. Motion and interactions: `assets/js/site.js` (Lenis smooth scroll + GSAP ScrollTrigger, both bundled in `assets/vendor`).

## URLs
Every page keeps its current Squarespace URL (`/work`, `/about`, `/contact`, `/resume`, `/arccosrangefinder`, `/arccos-link-pro`, …), so existing links keep working.

## Images
Images still load from Squarespace's CDN. Before you cancel Squarespace, run

    node tools/localize-images.mjs

to copy them into `assets/img` and repoint the pages.

## Host
Cloudflare Pages, Netlify, or Vercel: drag this folder in (or connect a repo). `404.html` is picked up automatically.
