// Static site generator. Run: node src/build.mjs  → writes HTML pages into the site root.
// Each project keeps its current Squarespace URL (/arccosrangefinder etc.) as /<slug>/index.html.
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CDN, site, home, about, resume, projects, retired } from './content.mjs';
// Cache-busting: each CSS/JS link carries a hash of the file, so browsers fetch the new version after every update.
const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ver = (f) => createHash('md5').update(readFileSync(join(ROOT, f))).digest('hex').slice(0, 8);
const V_CSS = ver('assets/css/site.css'), V_JS = ver('assets/js/site.js');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const br = (s = '') => esc(s).replace(/\n/g, '<br>');
const noDot = (s = '') => String(s).replace(/\.(?=\s|$)/g, '');
const pad = (n) => String(n).padStart(2, '0');


// Social marks (monochrome, inherit text color)
const ICON_LI = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>';
const ICON_IG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>';
const ICON_MAIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 6.2A2.2 2.2 0 0 1 4.2 4h15.6A2.2 2.2 0 0 1 22 6.2v.5l-10 6.3L2 6.7v-.5zm0 2.9v8.7A2.2 2.2 0 0 0 4.2 20h15.6a2.2 2.2 0 0 0 2.2-2.2V9.1l-10 6.3L2 9.1z"/></svg>';
const socials = (cls = '', withEmail = false) => `<span class="social ${cls}">${withEmail ? `<a class="social__a" href="mailto:${esc(site.email)}" aria-label="Email ${esc(site.email)}">${ICON_MAIL}</a>` : ''}<a class="social__a" href="${site.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON_LI}</a><a class="social__a" href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON_IG}</a></span>`;

// Selected Clients marquee: [file in assets/img/clients/logos, width/height ratio]
const LOGO_ROWS = [
  [['arccos', 5.426, 1.15], ['pga-tour-wordmark', 0.781, 1], ['titleist', 3.483, 1], ['taylormade', 5.187, 1], ['ping', 3.847, 0.9]],
  [['meta', 4.963, 0.8], ['long-drink', 0.867, 1], ['ea-sports', 1, 0.95], ['srixon', 3.13, 1], ['cobra', 8.093, 0.72], ['cleveland', 2.889, 1.2]],
  [['holderness-bourne', 20.9, 0.78], ['jjill', 1.431, 1.1], ['club-champion', 4.625, 1.15], ['random-golf-club', 0.863, 1], ['harvard-kennedy-school', 8.333, 1.15]],
];

// ---------- media helpers ----------
const isGif = (p) => /\.gif$/i.test(p);
const isLocal = (p) => /^assets\//.test(p);
// Squarespace images now live in assets/img/sq (downloaded by "Download Images.command")
const sqPath = (p, small) => { const d = decodeURIComponent(p); const f = small && !isGif(p) ? d.replace(/(\.[a-z0-9]+)$/i, '-1000$1') : d; return '@@PRE@@assets/img/sq/' + f.split('/').map(encodeURIComponent).join('/'); };
const url = (p, w = 1500) => (/^https?:/.test(p) ? p : isLocal(p) ? '@@PRE@@' + p : sqPath(p, w <= 1000));
function img(p, alt, { sizes = '100vw', cls = '', eager = false } = {}) {
  const src = url(p);
  const lw = isLocal(p) && /\.jpg$/.test(p) ? ` srcset="@@PRE@@${p.replace(/\.jpg$/, '-960.jpg')} 960w, @@PRE@@${p} 1920w" sizes="${sizes}"` : '';
  const srcset = isLocal(p) ? lw : isGif(p) || /^https?:/.test(p) ? '' : ` srcset="${sqPath(p, true)} 1000w, ${sqPath(p, false)} 2500w" sizes="${sizes}"`;
  return `<img class="${cls}" src="${src}"${srcset} alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}
function video(v, poster, posterAlt) {
  const id = v.yt || v.vimeo;
  const kind = v.yt ? 'yt' : 'vimeo';
  const thumb = v.yt ? `https://i.ytimg.com/vi/${v.yt}/maxresdefault.jpg` : url(poster, 1500);
  return `<figure class="video reveal-media" data-video="${kind}" data-id="${id}">
  <button class="video__poster" type="button" aria-label="Play ${esc(v.title)}" data-cursor="Play">
    <img src="${thumb}" alt="${esc(posterAlt || v.title)}" loading="lazy" decoding="async">
    <span class="video__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>
  </button>
  <figcaption class="mono">${esc(v.title)}</figcaption>
</figure>`;
}

// ---------- chrome ----------
const nav = (pre, active) => {
  const link = (href, label, key, extra = '') => `<a href="${pre}${href}" class="nav__link${active === key ? ' is-active' : ''}"${active === key ? ' aria-current="page"' : ''}>${label}${extra}</a>`;
  return `<header class="hdr" data-hdr>
  <a class="hdr__mark" href="${pre || './'}" aria-label="Joe Cavadini, home"><img class="hdr__logo" src="${CDN}eaa0dd22-bc67-4f95-9d0a-dbfeea2e1002/JC-1.png?format=750w" alt="Joe Cavadini, Art Direction + Design" width="750" height="152"></a>
  <nav class="hdr__nav" aria-label="Primary">
    ${link('work/', 'Work', 'work')}
    ${link('about/', 'About', 'about')}
    ${link('contact/', 'Contact', 'contact')}
  </nav>
  <div class="hdr__util">
    <button class="theme-btn" type="button" data-theme-toggle aria-label="Switch color theme"><span></span></button>
    <button class="menu-btn burger" type="button" data-menu-toggle aria-expanded="false" aria-controls="menu" aria-label="Menu"><i></i><i></i></button>
  </div>
</header>
<div class="menu" id="menu" data-menu hidden>
  <nav class="menu__nav" aria-label="Mobile">
    <a href="${pre}work/">Work</a><a href="${pre}about/">About</a><a href="${pre}contact/">Contact</a>
  </nav>
  <div class="menu__foot mono"><button class="menu__theme" type="button" data-theme-toggle aria-label="Switch color theme"><span class="theme-btn" aria-hidden="true"><span></span></span><span class="menu__theme-l mono">Dark mode</span><span class="menu__theme-d mono">Light mode</span></button><span>${esc(site.email)}</span></div>
</div>`;
};

const footer = (pre) => `<footer class="ftr" data-footer>
  <div class="ftr__bg" aria-hidden="true" style="background-image:url('${CDN}d262a83e-831c-4874-84e1-df39af58d652/hero.png?format=2500w')"></div>
  <div class="ftr__row wrap">
    <div class="ftr__cell"><p class="ftr__k">Based in</p><p class="ftr__v">${esc(site.location)}</p></div>
    <div class="ftr__cell"><p class="ftr__k">Hours</p><p class="ftr__v">${esc(site.hours)}</p></div>
    <div class="ftr__cell"><p class="ftr__k">Get in touch</p><div class="ftr__acts">${socials('social--ftr', true)}</div></div>
  </div>
</footer>`;

function page({ pre, title, desc, active, body, cls = '', og }) {
  return `<!doctype html>
<html lang="en" class="no-js" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="robots" content="noindex, nofollow">
<meta name="description" content="${esc(desc)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${esc(og || site.ogImage)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#f3f4f6">
<link rel="preload" href="${pre}assets/fonts/poppins-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${pre}assets/css/site.css?v=${V_CSS}">
<script>document.documentElement.classList.replace('no-js','js');try{var t=localStorage.getItem('jc-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
</head>
<body class="${cls}">
<a class="skip" href="#main">Skip to content</a>
<div class="curtain" data-curtain aria-hidden="true"></div>
<div class="cursor" data-cursor-el aria-hidden="true"><span></span></div>
${nav(pre, active)}
<main id="main">
${body}
</main>
${footer(pre)}
<script src="${pre}assets/vendor/lenis.min.js" defer></script>
<script src="${pre}assets/vendor/gsap.min.js" defer></script>
<script src="${pre}assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="${pre}assets/js/site.js?v=${V_JS}" defer></script>
</body>
</html>
`;
}

function write(rel, html) {
  html = html.replace(/https:\/\/images\.squarespace-cdn\.com\/content\/v1\/66cf56643bd8bd2cca885d53\/([^"'?\s)]+)(\?format=\d+w)?/g, (_, p) => sqPath(p, false));
  html = html.replaceAll('@@PRE@@', rel.includes('/') ? '../'.repeat(rel.split('/').length - 1) : '');
  const out = join(ROOT, rel);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log('wrote', rel);
}

// ---------- home ----------
function homePage() {
  const pre = '';
  const headline = home.headline.map((l) => {
    const accent = /^\{.*\}$/.test(l);
    return `<span class="line"><span class="line__in${accent ? ' accent' : ''}">${esc(noDot(l.replace(/[{}]/g, '')))}</span></span>`;
  }).join('');
  const featured = home.featured.map((f, i) => `
    <article class="stack__item" data-stack-item>
      <a class="stack__link" href="${pre}${f.slug}/" data-cursor="View">
        <div class="stack__media">${img(f.img, f.title, { cls: 'stack__img', eager: i === 0 })}</div>
        <div class="stack__shade" aria-hidden="true"></div>
        <span class="pill stack__pill">${esc(f.role)}</span>
        <div class="stack__copy">
          <h3 class="stack__title">${esc(noDot(f.title))}</h3>
        </div>
      </a>
    </article>`).join('');
  const focus = home.focus.map((f) => `<li class="focus__row" data-icon="${CDN}${f.img}"><span class="focus__ico" aria-hidden="true" style='-webkit-mask-image:url("${CDN}${f.img}");mask-image:url("${CDN}${f.img}")'></span><span class="focus__name"><span class="focus__long">${esc(f.name)}</span><span class="focus__short">${esc(f.name.replace(/ and /g, ' & '))}</span></span></li>`).join('');
  const process = home.process.map((p, i) => `<li class="process__step" data-step>
      <div><h3 class="process__name">${esc(p.name)}</h3><p class="process__text">${esc(p.text)}</p></div>
    </li>`).join('');
  const manifesto = home.manifesto.split(' ').map((w) => `<span class="w">${esc(w)}</span>`).join(' ');
  const clients = home.clients.map((c) => `<span>${esc(c)}</span><i aria-hidden="true">/</i>`).join('');

  const body = `
<section class="reel reel--top" data-reel-top aria-label="Showreel">
  <div class="reel__frame" data-reel-frame>
    <video class="reel__img" data-reel-video autoplay muted loop playsinline preload="auto" poster="${pre}${home.reelPoster}?v=${ver(home.reelPoster)}" aria-label="Showreel: Arccos Smart Laser Rangefinder">
      <source src="${pre}${home.reelVideo}?v=${ver(home.reelVideo)}" type="video/mp4">
    </video>
  </div>
  <span class="reel__cue" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v15M6 13l6 6 6-6"/></svg></span>
</section>

<section class="hero wrap" data-hero>
  <div class="hero__top">
    <p class="hero__eyebrow hero__loc">${esc(home.eyebrow)}</p>
  </div>
  <h1 class="hero__title" aria-label="${esc(noDot(home.headline.join(' ').replace(/[{}]/g, '')))}">${headline}</h1>
  <div class="hero__foot">
    <div class="hero__ctas">
      <a class="btn btn--solid" href="#selected-work" data-scroll-to>View work</a>
      <a class="btn" href="${pre}contact/">Contact</a>
    </div>
    <span class="hero__arrow" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 4v15M6 13l6 6 6-6"/></svg></span>
  </div>
</section>

<section class="sel" id="selected-work" aria-labelledby="sel-h">
  <div class="sel__head wrap">
    <h2 id="sel-h" class="h-section">Selected Work</h2>
    <a class="btn btn--solid sel__cta" href="${pre}work/">View all work</a>
  </div>
  <div class="stack">${featured}</div>
</section>

<section class="focus wrap" aria-labelledby="focus-h">
  <div class="duo">
    <div class="duo__side"><h2 id="focus-h" class="h-section">Areas of Focus</h2><p class="muted">The disciplines I work across, often all on one project.</p></div>
    <ul class="duo__list" data-focus>${focus}</ul>
  </div>
  <div class="focus__preview" data-focus-preview aria-hidden="true"><img alt=""></div>
</section>

<section class="bleed" aria-label="On the course">
  <figure class="bleed__fig">${img(home.photo.src, home.photo.alt, { sizes: '100vw', cls: 'bleed__img' })}</figure>
</section>

<section class="process wrap" aria-labelledby="process-h" data-process>
  <div class="duo">
    <div class="duo__side"><h2 id="process-h" class="h-section">Process</h2><p class="muted">From the first question to the final file.</p><div class="process__meter" aria-hidden="true"><span data-process-bar></span></div></div>
    <ol class="duo__list process__list">${process}</ol>
  </div>
</section>

<section class="clients clients--logos" aria-labelledby="clients-h">
  <div class="wrap"><h2 id="clients-h" class="h-section">Selected Clients</h2></div>
  <div class="logo-rows" role="img" aria-label="${esc(home.clients.join(', '))}">
    ${LOGO_ROWS.map((row, r) => `<div class="logo-row logo-row--${r}"><div class="logo-track">${Array(4).fill(row.map(([f, ar, k]) => `<img class="logo" src="${pre}assets/img/clients/logos/${f}.png" alt="" decoding="async" style="--ar:${ar};--s:${(k * Math.min(1.55, 1.5 * Math.pow(ar, -0.42))).toFixed(3)}">`).join('')).join('')}</div></div>`).join('\n    ')}
  </div>
</section>`;
  write('index.html', page({ pre, title: 'Joe Cavadini — Art Director + Designer', desc: 'Brooklyn-based art director and designer helping brands tell good stories, built to perform.', active: 'home', body, cls: 'p-home' }));
}

// One short role per project for cards and the index: the homepage card role if there is one, else the first line of Role.
const roleOf = (p) => home.featured.find((f) => f.slug === p.slug)?.role || ((p.meta || []).find(([k]) => k === 'Role')?.[1] || '').split('\n')[0];

// ---------- work index ----------
function workPage() {
  const pre = '../';
  const cards = projects.map((p, i) => `
    <li class="fall__item" data-fall>
      <a href="${pre}${p.slug}/" class="fall__link" data-cursor="View">
        <div class="fall__media${p.logos ? ' fall__media--plain' : ''}">${img(p.cover, p.coverAlt, { sizes: '(min-width: 900px) 50vw, 90vw', cls: 'fall__img' })}${p.logos ? '' : `<span class="pill fall__pill">${esc(roleOf(p))}</span>`}</div>
        <p class="fall__cap"><span class="fall__title">${esc(noDot(p.short || p.title))}</span></p>
      </a>
    </li>`).join('');
  const rows = projects.map((p, i) => `
    <li><a class="idx__row" href="${pre}${p.slug}/" data-preview="${url(p.cover, 750)}">
      <span class="idx__title">${esc(noDot(p.short || p.title))}</span><span class="idx__client muted">${esc(p.client)}</span><span class="idx__svc muted">${esc(roleOf(p))}</span>
    </a></li>`).join('');
  const body = `
<section class="pagehead wrap">
  <div class="pagehead__row">
  <h1 class="pagehead__title"><span class="line"><span class="line__in">Work</span></span></h1>
  <div class="view-toggle" role="tablist" aria-label="Layout">
    <button type="button" role="tab" aria-selected="true" data-view="grid" class="mono">Grid</button>
    <button type="button" role="tab" aria-selected="false" data-view="index" class="mono">Index</button>
  </div>
  </div>
</section>
<section class="wrap work" data-work-view="grid">
  <ul class="grid fall" data-grid>${cards}</ul>
  <ul class="idx" data-idx>${rows}</ul>
  <div class="focus__preview" data-focus-preview aria-hidden="true"><img alt=""></div>
</section>`;
  write('work/index.html', page({ pre, title: 'Work — Joe Cavadini', desc: 'Campaigns, product launches, packaging, and brand identity by Joe Cavadini.', active: 'work', body, cls: 'p-work' }));
}

// ---------- project pages ----------
function galleryHTML(p) {
  if (!p.gallery) return '';
  if (p.logos) {
    return `<ul class="logos wrap">${p.gallery.map(([s, a]) => `<li class="logos__cell" data-reveal>${img(s, a, { sizes: '(min-width: 900px) 30vw, 50vw' })}<span class="mono muted">${esc(a)}</span></li>`).join('')}</ul>`;
  }
  // Rhythm: one full-bleed, then a pair, repeat.
  const out = [];
  let i = 0, k = 0;
  while (i < p.gallery.length) {
    if (k % 2 === 0) { const [s, a] = p.gallery[i++]; out.push(`<figure class="g g--full reveal-media">${img(s, a, { sizes: '100vw', cls: 'parallax' })}</figure>`); }
    else {
      const pair = p.gallery.slice(i, i + 2); i += pair.length;
      out.push(`<div class="g-pair">${pair.map(([s, a]) => `<figure class="g g--half reveal-media">${img(s, a, { sizes: '(min-width: 900px) 48vw, 100vw' })}</figure>`).join('')}</div>`);
    }
    k++;
  }
  return `<section class="gallery wrap" aria-label="Project images">${out.join('')}</section>`;
}

function carouselHTML(p) {
  if (!p.carousel) return '';
  const slides = p.carousel.map(([s, a]) => `<figure class="car__slide">${img(s, a, { sizes: '(min-width: 900px) 62vw, 86vw' })}</figure>`).join('');
  const dots = p.carousel.map((_, j) => `<button type="button" class="car__dot${j ? '' : ' is-on'}" aria-label="Show image ${j + 1}" data-car-dot="${j}"></button>`).join('');
  return `<section class="car" data-car aria-label="Product images" aria-roledescription="carousel">
  <div class="car__track" data-car-track data-lenis-prevent tabindex="0">${slides}</div>
  <div class="car__dots wrap">${dots}</div>
</section>`;
}

// ---------- Squarespace-matched image layouts ----------
function vid(v, ratio, pre = '../') {
  const id = v.yt || v.vimeo || '', kind = v.src ? 'file' : v.yt ? 'yt' : 'vimeo';
  const thumb = v.thumb || (v.src ? pre + v.poster : v.yt ? `https://i.ytimg.com/vi/${v.yt}/maxresdefault.jpg` : `https://vumbnail.com/${v.vimeo}.jpg`);
  return `<figure class="video lay__item reveal-media" data-video="${kind}" data-id="${id}"${v.src ? ` data-src="${pre}${v.src}"` : ''}${ratio ? ` style="--ar:${ratio}"` : ''}>
  <button class="video__poster" type="button" aria-label="Play ${esc(v.title)}" data-cursor="Play">
    <img src="${thumb}" alt="${esc(v.title)}" loading="lazy" decoding="async">
    <span class="video__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5z"/></svg></span>
  </button>
</figure>`;
}
function layoutParts(p) {
  const alts = new Map([...(p.gallery || []), ...(p.carousel || [])].map(([s, a]) => [s, a]));
  const alt = (s) => alts.get(s) || p.title;
  const list = (ref) => {
    if (Array.isArray(ref)) return ref;
    const g = (p.gallery || []).map(([s]) => s);
    if (ref === '@bandon') return g.filter((s) => /Bandon/.test(s));
    if (ref === '@gallery-rest') return g.filter((s) => s !== p.hero);
    return g;
  };
  const fig = (s, ratio, cls = '', sizes = '(min-width: 900px) 60vw, 100vw') => `<figure class="lay__item ${cls} reveal-media"${ratio ? ` style="--ar:${ratio}"` : ''}>${img(s, alt(s), { sizes })}</figure>`;
  const lead = [], rest = [];
  p.layout.forEach((row, n) => {
    const [kind, a, b, c] = row;
    let html = '';
    if (kind === 'slideshow') {
      const items = list(a);
      html = `<section class="ss ss--${p.col || 'narrow'}" data-ss aria-label="Product images" aria-roledescription="carousel">
  <div class="ss__stage" data-ss-stage>${items.map((s, j) => `<figure class="ss__slide${j ? '' : ' is-on'}" aria-hidden="${j ? 'true' : 'false'}">${img(s, alt(s), { sizes: '(min-width: 900px) 50vw, 90vw', eager: j === 0 })}</figure>`).join('')}</div>
  <div class="ss__dots">${items.map((_, j) => `<button type="button" class="car__dot${j ? '' : ' is-on'}" aria-label="Show image ${j + 1}" data-ss-dot="${j}"></button>`).join('')}</div>
</section>`;
      (n === 0 ? lead : rest).push(html); return;
    }
    if (kind === 'carousel') {
      const items = list(a);
      html = `<section class="car car--photos" data-car aria-label="Photography" aria-roledescription="carousel">
  <div class="car__track" data-car-track data-lenis-prevent tabindex="0">${items.map((s) => `<figure class="car__slide">${img(s, alt(s), { sizes: '(min-width: 900px) 30vw, 80vw' })}</figure>`).join('')}</div>
  <div class="car__bar wrap"><span data-car-bar></span></div>
</section>`;
      rest.push(html); return;
    }
    if (kind === 'full') html = `<div class="lay__row">${fig(a)}</div>`;
    if (kind === 'small') html = `<div class="lay__row lay__row--small">${fig(a)}</div>`;
    if (kind === 'pair') html = `<div class="lay__row lay__row--2">${fig(a, c)}${fig(b, c)}</div>`;
    if (kind === 'grid3') html = `<div class="lay__row lay__row--3">${list(a).map((s) => fig(s, b, '', '(min-width: 900px) 30vw, 50vw')).join('')}</div>`;
    if (kind === 'video') html = `<div class="lay__row">${vid(a)}</div>`;
    if (kind === 'videopair') html = `<div class="lay__row lay__row--2">${vid(a, c)}${vid(b, c)}</div>`;
    rest.push(`<div class="lay__wrap">${html}</div>`);
  });
  // group consecutive column rows into one centered column
  const out = []; let buf = [];
  const flush = () => { if (buf.length) { out.push(`<section class="lay wrap lay--${p.col || 'narrow'}" aria-label="Project images">${buf.join('')}</section>`); buf = []; } };
  rest.forEach((h) => { if (h.startsWith('<div class="lay__wrap">')) buf.push(h.slice(23, -6)); else { flush(); out.push(h); } });
  flush();
  return { lead: lead.join(''), rest: out.join('') };
}

function projectPage(p, i) {
  const pre = '../';
  const next = projects[(i + 1) % projects.length];
  const prev = i > 0 ? projects[i - 1] : null;
  const metaRows = [['Client', p.client], ...(p.meta || [])]; // same fields on every project: Client, Role (+ Contributors where credited)
  // His order: Role, then Client, then credits.
  const factRows = [...metaRows.filter(([k]) => k === 'Role'), ...metaRows.filter(([k]) => k !== 'Role')];
  const facts = factRows.map(([k, v]) => `<div class="proj__fact" data-reveal><dt class="proj__k">${esc(k)}</dt><dd>${br(v)}</dd></div>`).join('');
  const sections = (p.sections || []).map(([k, v]) => `<section class="proj__sec" data-reveal><h2 class="proj__k">${esc(k)}</h2><p>${esc(v)}</p></section>`).join('');
  const stats = p.stats ? `<section class="stats wrap" aria-label="Results"><h2 class="label">The result</h2><ul class="stats__list">${p.stats.map(([n, l]) => `<li data-reveal><span class="stats__n" data-count="${esc(n)}">${esc(n)}</span><span class="muted">${esc(l)}</span></li>`).join('')}</ul></section>` : '';
  const videos = p.videos ? `<section class="videos wrap${p.videos.length > 1 ? ' videos--multi' : ''}" aria-label="Films">${p.videos.map((v, j) => video(v, j === 0 ? (p.hero || p.cover) : (p.gallery?.[j]?.[0] || p.cover), v.title)).join('')}</section>` : '';
  const soon = p.soon ? `<section class="txt wrap"><h2 class="label txt__k">Status</h2><p class="txt__v">The full case study is being written up. In the meantime, <a class="ulink" href="${pre}contact/">get in touch</a> for a walkthrough.</p></section>` : '';
  const heroImg = p.hero || p.cover;
  const body = `
<article class="proj">
  <figure class="proj__hero"><div class="reel__frame">${img(heroImg, p.coverAlt, { cls: 'reel__img', eager: true })}</div></figure>
  <header class="proj__intro wrap">
    <div class="proj__side">
      <h1 class="proj__title">${esc(noDot(p.title)).split(' ').map((w) => `<span class="line"><span class="line__in">${w}</span></span>`).join(' ')}</h1>
      <dl class="proj__facts">${facts}</dl>
    </div>
    <div class="proj__body">${sections}</div>
  </header>
  ${p.layout && !p.leadAfterStats ? layoutParts(p).lead : ''}${p.layout ? '' : carouselHTML(p)}${stats}${p.layout && p.leadAfterStats ? layoutParts(p).lead : ''}${soon}${p.layout ? layoutParts(p).rest : videos + galleryHTML(p)}
  <nav class="pn wrap" aria-label="More projects">
    ${prev ? `<a class="pn__link pn__link--prev" href="${pre}${prev.slug}/"><span class="mono muted pn__k">Previous project</span><span class="pn__title">${esc(noDot(prev.short || prev.title))}</span></a>` : '<span></span>'}
    <a class="pn__link pn__link--next" href="${pre}${next.slug}/"><span class="mono muted pn__k">Next project</span><span class="pn__title">${esc(noDot(next.short || next.title))}</span></a>
  </nav>
</article>`;
  const desc = (p.sections?.[0]?.[1] || `${p.title}, ${p.services} for ${p.client}.`).slice(0, 155);
  write(`${p.slug}/index.html`, page({ pre, title: `${p.short || p.title} — Joe Cavadini`, desc, active: 'work', body, cls: 'p-proj', og: url(p.cover) }));
}

// ---------- about ----------
function aboutPage() {
  const pre = '../';
  const svc = about.services.map((s) => `<span>${esc(s)}</span><i aria-hidden="true">•</i>`).join('');
  const body = `
<h1 class="sr-only">About Joe Cavadini</h1>
<section class="about wrap">
  <figure class="about__portrait reveal-media">${img(about.portrait.src, about.portrait.alt, { sizes: '(min-width: 900px) 40vw, 100vw', cls: 'parallax', eager: true })}</figure>
  <div class="about__copy">
    <p class="about__lead" data-reveal>${esc(about.lead)}</p>
    ${about.story.map((s) => `<p data-reveal>${esc(s)}</p>`).join('')}
    <dl class="facts">${about.facts.map((f) => `<div data-reveal><dt class="label">${esc(f.k)}</dt><dd>${br(f.v)}</dd></div>`).join('')}</dl>
    <div class="about__links"><a class="btn btn--solid" href="${pre}resume/">Resume</a>${socials()}</div>
  </div>
</section>
<section class="clients" aria-labelledby="svc-h">
  <div class="wrap"><h2 id="svc-h" class="label">Services</h2></div>
  <div class="marquee marquee--big" data-marquee><div class="marquee__track">${svc}${svc.replace(/<span>/g, '<span aria-hidden="true">')}</div></div>
</section>`;
  write('about/index.html', page({ pre, title: 'About — Joe Cavadini', desc: about.lead, active: 'about', body, cls: 'p-about', og: url(about.portrait.src) }));
}

// ---------- contact ----------
function contactPage() {
  const pre = '../';
  const body = `
<section class="contact wrap">
  <div class="contact__grid2">
    <div class="contact__side">
      <h1 class="pagehead__title"><span class="line"><span class="line__in">Get in touch</span></span></h1>
      <p class="contact__intro">For new projects, collaborations, or just to talk shop, the best way to reach me is email.</p>
    </div>
    <ul class="contact__list">
      <li><a class="contact__row" href="mailto:${esc(site.email)}"><span class="contact__ico" aria-hidden="true">${ICON_MAIL}</span><span class="contact__v">${esc(site.email)}</span><span class="sr-only"> (email)</span></a></li>
      <li><a class="contact__row" href="${site.linkedin}" target="_blank" rel="noopener"><span class="contact__ico" aria-hidden="true">${ICON_LI}</span><span class="contact__v">in/joecavadini</span><span class="sr-only"> (LinkedIn)</span></a></li>
      <li><a class="contact__row" href="${site.instagram}" target="_blank" rel="noopener"><span class="contact__ico" aria-hidden="true">${ICON_IG}</span><span class="contact__v">@joecav_dbg</span><span class="sr-only"> (Instagram)</span></a></li>
    </ul>
  </div>
</section>`;
  write('contact/index.html', page({ pre, title: 'Contact — Joe Cavadini', desc: 'Get in touch with Joe Cavadini, Brooklyn-based art director and designer.', active: 'contact', body, cls: 'p-contact' }));
}

// ---------- resume ----------
function resumePage() {
  const pre = '../';
  const body = `
<section class="pagehead wrap">
  <h1 class="pagehead__title"><span class="line"><span class="line__in">Resume</span></span></h1>
  <p><a class="btn" href="${url(resume.src, 2500)}" target="_blank" rel="noopener">Open full size</a></p>
</section>
<section class="wrap resume"><figure class="resume__doc reveal-media">${img(resume.src, resume.alt, { sizes: '(min-width: 900px) 900px, 100vw', eager: true })}</figure></section>`;
  write('resume/index.html', page({ pre, title: 'Resume — Joe Cavadini', desc: 'Résumé of Joe Cavadini, art director and designer.', active: 'about', body, cls: 'p-resume' }));
}

// 404 for static hosts
function notFound() {
  const pre = process.env.BASE || '/'; // absolute so it works at any depth; BASE=/joecavdesign/ while on github.io
  const body = `<section class="pagehead wrap"><h1 class="pagehead__title"><span class="line"><span class="line__in">Out of bounds</span></span></h1><p><a class="btn btn--solid" href="${pre}">Back to the tee</a></p></section>`;
  write('404.html', page({ pre, title: 'Not found — Joe Cavadini', desc: 'Page not found.', active: '', body, cls: 'p-404' }));
}

// Retired project URLs: send old links to the Work page.
function redirects() {
  retired.forEach((slug) => write(`${slug}/index.html`, `<!doctype html><meta charset="utf-8"><title>Moved — Joe Cavadini</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=../work/"><link rel="canonical" href="${site.url}/work/"><a href="../work/">See all work</a>\n`));
}

redirects(); homePage(); workPage(); projects.forEach(projectPage); aboutPage(); contactPage(); resumePage(); notFound();
