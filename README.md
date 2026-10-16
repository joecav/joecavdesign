# joecavdesign

Portfolio site for Joe Cavadini, art director and designer based in Brooklyn.

Static HTML, CSS and JavaScript, hosted on GitHub Pages.

## Edit

All copy, projects and image paths live in `src/content.mjs`. After editing, rebuild the pages:

    node src/build.mjs

Styles are in `assets/css/site.css`. Motion is in `assets/js/site.js` (Lenis and GSAP ScrollTrigger, bundled in `assets/vendor`).

## Preview locally

    python3 -m http.server 8000

Then open http://localhost:8000.

© Joe Cavadini. All rights reserved. Client logos and project work belong to their respective owners.
