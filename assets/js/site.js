/* Joe Cavadini portfolio — interactions. Lenis smooth scroll + GSAP ScrollTrigger. */
(() => {
  const d = document, root = d.documentElement;
  const $ = (s, c = d) => c.querySelector(s);
  const $$ = (s, c = d) => [...c.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const hasGsap = !!(window.gsap && window.ScrollTrigger);

  /* Opened straight from disk (file://): point folder links at their index.html so navigation works */
  if (location.protocol === 'file:') {
    $$('a[href]').forEach((a) => {
      const h = a.getAttribute('href');
      if (/^(https?:|mailto:|tel:|#)/.test(h)) return;
      const [path, hash = ''] = h.split('#');
      if (path === '' || path.endsWith('/')) a.setAttribute('href', (path || './') + 'index.html' + (hash ? '#' + hash : ''));
      else if (path === '.' || path === '..') a.setAttribute('href', path + '/index.html');
    });
  }
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };

  /* ---------- opening a local copy (file://): point folder links at index.html ---------- */
  if (location.protocol === 'file:') {
    $$('a[href]').forEach((a) => {
      const h = a.getAttribute('href');
      if (/^(https?:|mailto:|#)/.test(h)) return;
      if (h === './' || h === '') a.setAttribute('href', 'index.html');
      else if (h.endsWith('/')) a.setAttribute('href', h + 'index.html');
    });
  }

  /* ---------- clock, year ---------- */
  const fmt = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York' });
  const tick = () => {
    const t = fmt.format(new Date());
    $$('[data-clock]').forEach((el) => (el.textContent = 'BK ' + t));
    $$('[data-clock-big]').forEach((el) => (el.textContent = t + ' ET'));
  };
  tick(); setInterval(tick, 15000);
  $$('[data-year]').forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- theme ---------- */
  $$('[data-theme-toggle]').forEach((b) => b.addEventListener('click', () => {
    const cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    const next = cur === 'light' ? 'dark' : 'light';
    root.dataset.theme = next; store.set('jc-theme', next);
  }));

  /* ---------- mobile menu ---------- */
  const menu = $('[data-menu]'), menuBtn = $('[data-menu-toggle]');
  if (menu && menuBtn) menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') !== 'true';
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    if (open && hasGsap && !reduce) gsap.from($$('.menu__nav a', menu), { yPercent: 60, opacity: 0, duration: .8, stagger: .06, ease: 'expo.out' });
    lenis && (open ? lenis.stop() : lenis.start());
  });

  /* ---------- copy email ---------- */
  $$('[data-copy]').forEach((b) => b.addEventListener('click', () => {
    const hint = $('.copy__hint', b), txt = b.dataset.copy, orig = hint ? hint.textContent : '';
    const done = (msg) => { if (hint) { hint.textContent = msg; setTimeout(() => (hint.textContent = orig), 1800); } };
    const fallback = () => { const r = d.createRange(); r.selectNodeContents($('.copy__text', b)); const s = getSelection(); s.removeAllRanges(); s.addRange(r); done('Selected, press ⌘C'); };
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => done('Copied'), fallback); else fallback();
  }));

  /* ---------- lite video embeds ---------- */
  $$('[data-video]').forEach((fig) => {
    const btn = $('.video__poster', fig);
    btn.addEventListener('click', () => {
      const id = fig.dataset.id;
      if (fig.dataset.video === 'file') {
        const v = d.createElement('video');
        v.src = fig.dataset.src; v.controls = true; v.playsInline = true; v.autoplay = true; v.className = 'video__file';
        btn.replaceWith(v); v.play().catch(() => {}); return;
      }
      const src = fig.dataset.video === 'yt'
        ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
        : `https://player.vimeo.com/video/${id}?autoplay=1&byline=0&title=0&portrait=0`;
      const f = d.createElement('iframe');
      f.src = src; f.title = btn.getAttribute('aria-label').replace(/^Play /, '');
      f.allow = 'autoplay; fullscreen; picture-in-picture'; f.allowFullscreen = true;
      btn.replaceWith(f);
    });
  });

  /* ---------- hero reel: play only while on screen, sound toggle ---------- */
  $$('[data-reel-video]').forEach((v) => {
    const btn = v.parentElement.querySelector('[data-reel-sound]');
    if (reduce) { v.removeAttribute('autoplay'); v.pause(); }
    v.addEventListener('error', () => btn && (btn.hidden = true), true);
    const src = v.querySelector('source'); src && src.addEventListener('error', () => btn && (btn.hidden = true));
    if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !reduce) v.play().catch(() => {}); else v.pause();
    }, { threshold: 0.15 }).observe(v);
    btn && btn.addEventListener('click', () => {
      v.muted = !v.muted;
      if (!v.muted) v.play().catch(() => {});
      btn.textContent = v.muted ? 'Sound off' : 'Sound on';
      btn.setAttribute('aria-pressed', String(!v.muted));
    });
  });

  /* ---------- work: grid / index toggle ---------- */
  const work = $('[data-work-view]');
  if (work) {
    const set = (v) => {
      work.dataset.workView = v;
      $$('[data-view]').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.view === v)));
      store.set('jc-work-view', v);
      hasGsap && ScrollTrigger.refresh();
    };
    $$('[data-view]').forEach((b) => b.addEventListener('click', () => set(b.dataset.view)));
    const saved = store.get('jc-work-view'); if (saved) set(saved);
  }

  /* ---------- hover image preview (focus list, work index) ---------- */
  const pv = $('[data-focus-preview]');
  if (pv && fine) {
    const pimg = $('img', pv);
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0;
    const loop = () => { cx += (x - cx) * .14; cy += (y - cy) * .14; pv.style.translate = `${cx + 24}px ${cy - pv.offsetHeight / 2}px`; raf = requestAnimationFrame(loop); };
    $$('[data-preview], [data-icon]').forEach((row) => {
      row.addEventListener('mouseenter', (e) => {
        if (row.dataset.icon) { pv.classList.add('is-icon'); pv.style.setProperty('--icon', `url("${row.dataset.icon}")`); }
        else { pv.classList.remove('is-icon'); pimg.src = row.dataset.preview; }
        pv.classList.add('is-on'); if (!raf) { cx = x = e.clientX; cy = y = e.clientY; loop(); }
      });
      row.addEventListener('mouseleave', () => pv.classList.remove('is-on'));
    });
    addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; }, { passive: true });
  }

  /* ---------- cursor ---------- */
  const cur = $('[data-cursor-el]');
  if (false && cur && fine && !reduce) { // custom cursor turned off
    const dot = $('span', cur);
    let x = -100, y = -100, cx = x, cy = y;
    addEventListener('mousemove', (e) => { x = e.clientX; y = e.clientY; cur.classList.add('is-on'); }, { passive: true });
    d.addEventListener('mouseleave', () => cur.classList.remove('is-on'));
    (function loop() { cx += (x - cx) * .2; cy += (y - cy) * .2; cur.style.transform = `translate3d(${cx}px,${cy}px,0)`; requestAnimationFrame(loop); })();
    $$('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => { dot.textContent = el.dataset.cursor; cur.classList.add('is-label'); });
      el.addEventListener('mouseleave', () => { cur.classList.remove('is-label'); });
    });
  }

  /* ---------- smooth scroll ---------- */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1, smoothWheel: true });
    if (hasGsap) { lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0); }
    else (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
  }
  $$('[data-top]').forEach((b) => b.addEventListener('click', () => (lenis ? lenis.scrollTo(0, { duration: 1.6 }) : scrollTo({ top: 0, behavior: 'smooth' }))));

  /* ---------- header: always visible; turns solid once you scroll (on home, once past the reel) ---------- */
  const hdr = $('[data-hdr]');
  const reelTop = $('[data-reel-top]');
  const onScroll = () => {
    if (!hdr) return;
    const limit = reelTop ? reelTop.offsetHeight - hdr.offsetHeight : 24;
    hdr.classList.toggle('is-solid', scrollY > limit);
  };
  onScroll();
  lenis ? lenis.on('scroll', onScroll) : addEventListener('scroll', onScroll, { passive: true });

  /* ---------- in-page anchors (hero "View work" → Selected Work) ---------- */
  $$('a[data-scroll-to]').forEach((a) => a.addEventListener('click', (e) => {
    const target = $(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + scrollY - (hdr ? hdr.offsetHeight : 0);
    lenis ? lenis.scrollTo(top, { duration: 1.6, easing: (x) => 1 - Math.pow(1 - x, 4) }) : scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  }));

  /* ---------- product carousel: swipe / drag / dots ---------- */
  $$('[data-car]').forEach((car) => {
    const track = $('[data-car-track]', car), slides = $$('.car__slide', car), dots = $$('[data-car-dot]', car); let best = 0;
    const go = (j) => slides[j] && track.scrollTo({ left: slides[j].offsetLeft - slides[0].offsetLeft, behavior: reduce ? 'auto' : 'smooth' });
    const sync = () => {
      const x = track.scrollLeft; best = 0;
      slides.forEach((s, j) => { if (Math.abs(s.offsetLeft - slides[0].offsetLeft - x) < Math.abs(slides[best].offsetLeft - slides[0].offsetLeft - x)) best = j; });
      if (x >= track.scrollWidth - track.clientWidth - 4) best = slides.length - 1;
      dots.forEach((d, j) => d.classList.toggle('is-on', j === best));
    };
    track.addEventListener('scroll', () => requestAnimationFrame(sync), { passive: true });
    dots.forEach((d, j) => d.addEventListener('click', () => go(j)));
    track.addEventListener('keydown', (e) => {
      const cur = best;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(Math.min(cur + 1, slides.length - 1)); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(Math.max(cur - 1, 0)); }
    });
    // mouse drag (touch uses native swipe)
    let down = false, sx = 0, sl = 0, moved = 0;
    track.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; down = true; moved = 0; sx = e.clientX; sl = track.scrollLeft; track.classList.add('is-drag'); });
    addEventListener('pointermove', (e) => { if (!down) return; moved = e.clientX - sx; track.scrollLeft = sl - moved; });
    addEventListener('pointerup', () => {
      if (!down) return; down = false; track.classList.remove('is-drag');
      sync(); go(best);
    });
  });

  /* ---------- product slideshow: one at a time (tap / swipe / dots / keys) ---------- */
  $$('[data-ss]').forEach((ss) => {
    const stage = $('[data-ss-stage]', ss), slides = $$('.ss__slide', ss), dots = $$('[data-ss-dot]', ss);
    let cur = 0;
    const show = (j) => { cur = (j + slides.length) % slides.length; slides.forEach((s, k) => { s.classList.toggle('is-on', k === cur); s.setAttribute('aria-hidden', k === cur ? 'false' : 'true'); }); dots.forEach((d, k) => d.classList.toggle('is-on', k === cur)); };
    dots.forEach((d, j) => d.addEventListener('click', () => show(j)));
    let x0 = null;
    stage.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
    stage.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) show(cur + (dx < 0 ? 1 : -1)); else show(cur + (e.offsetX < stage.clientWidth / 3 ? -1 : 1)); });
    stage.tabIndex = 0;
    stage.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(cur + 1); if (e.key === 'ArrowLeft') show(cur - 1); });
  });
  /* photo carousel progress bar */
  $$('[data-car-bar]').forEach((bar) => {
    const track = $('[data-car-track]', bar.closest('[data-car]'));
    const wrap = bar.parentElement;
    const upd = () => { const max = track.scrollWidth - track.clientWidth; const w = wrap.clientWidth - 2 * (parseFloat(getComputedStyle(bar).left) || 0); const frac = Math.max(.12, track.clientWidth / track.scrollWidth); bar.style.width = (w * frac) + 'px'; bar.style.transform = `translateX(${max > 0 ? (track.scrollLeft / max) * w * (1 - frac) : 0}px)`; };
    track.addEventListener('scroll', () => requestAnimationFrame(upd), { passive: true }); addEventListener('resize', upd); upd();
  });

  /* ---------- page transitions ---------- */
  const curtain = $('[data-curtain]');
  const hideCurtain = () => { if (curtain) curtain.style.display = 'none'; };
  d.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a || !curtain || reduce || !hasGsap) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = a.getAttribute('href');
    if (/^(mailto:|tel:|#)/.test(href)) return;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin && location.protocol !== 'file:') return;
    if (u.pathname === location.pathname && u.hash) return;
    e.preventDefault();
    curtain.style.display = 'grid';
    gsap.fromTo(curtain, { '--b': '0px', '--o': '0%' }, { '--b': '12px', '--o': '30%', duration: .5, ease: 'power2.in', onComplete: () => (location.href = a.href) });
  });
  addEventListener('pageshow', (e) => { if (e.persisted) hideCurtain(); });

  if (!hasGsap || reduce) { hideCurtain(); return; }

  /* ================= GSAP choreography ================= */
  gsap.registerPlugin(ScrollTrigger);

  // Section pause: as each section arrives under the nav, briefly ease off the wheel so the scroll settles for a beat.
  if (lenis) {
    const vs = lenis.virtualScroll && lenis.virtualScroll.options, o = { w: 1, l: .09 };
    const apply = () => { if (vs) vs.wheelMultiplier = o.w; lenis.options.lerp = o.l; };
    const bump = () => { gsap.killTweensOf(o); o.w = .25; o.l = .045; apply(); gsap.to(o, { w: 1, l: .09, duration: .7, ease: 'power2.in', onUpdate: apply }); };
    const hdr = () => parseFloat(getComputedStyle(root).getPropertyValue('--hdr-h')) || 64;
    $$('main > section').slice(1).forEach((sec) => ScrollTrigger.create({ trigger: sec, start: () => `top ${hdr()}px`, onEnter: bump, onEnterBack: bump }));
  }
  const E = 'expo.out';

  // Intro: lift the curtain, then reveal headline lines.
  const intro = gsap.timeline();
  intro.fromTo(curtain, { '--b': '12px', '--o': '30%' }, { '--b': '0px', '--o': '0%', duration: .8, ease: 'power2.out', delay: .05, onComplete: hideCurtain })
    .from('[data-reel-top] .reel__img', { scale: matchMedia('(min-width: 761px)').matches ? 1.12 : 1, opacity: 0, duration: 1.6, ease: E }, '-=.6')
    .from('.pagehead__title .line__in, .proj__title .line__in', { yPercent: 115, duration: 1.2, stagger: .08, ease: E }, '-=1.5')
    .from('.proj__head .meta, .proj__head > p, .pagehead > p, .pagehead .view-toggle, .contact > p, .contact__email', { opacity: 0, y: 16, duration: .9, stagger: .06, ease: E }, '-=.9');

  // Home: the reel fills the first screen, then recedes into a framed panel as the page scrolls up over it.
  if (matchMedia('(min-width: 761px)').matches) $$('[data-reel-top]').forEach((r) => {
    const frame = $('[data-reel-frame]', r), v = $('video', frame), side = getComputedStyle(root).getPropertyValue('--side').trim() || '24px';
    gsap.timeline({ scrollTrigger: { trigger: r, start: 'top top', end: 'bottom top', scrub: true } })
      .to(frame, { scale: .94, ease: 'none' }, 0)
      .to(v, { filter: 'brightness(.55)', ease: 'none' }, 0)
      .to($('.reel__cue', r), { opacity: 0, ease: 'none', duration: .2 }, 0);
  });
  // Home headline reveals as it scrolls into view.
  gsap.from('.hero__title .line__in', { yPercent: 115, duration: 1.2, stagger: .08, ease: E, scrollTrigger: { trigger: '.hero__title', start: 'top bottom' } });
  gsap.from('.hero__top, .hero__foot', { opacity: 0, y: 16, duration: .9, stagger: .08, ease: E, scrollTrigger: { trigger: '.hero', start: 'top bottom' } });
  // Hero CTAs fade away as Selected Work slides in.
  if ($('#selected-work') && $('.hero__ctas')) gsap.to('.p-home .hero', { autoAlpha: 0, y: -16, ease: 'none', scrollTrigger: { trigger: '#selected-work', start: 'top 80%', end: 'top 30%', scrub: true } });

  // Reels: open from an inset frame to full bleed.
  if (matchMedia('(min-width: 761px)').matches) $$('[data-reel]').forEach((r) => {
    const frame = $('[data-reel-frame]', r), im = $('img, video', frame);
    const side = getComputedStyle(root).getPropertyValue('--side').trim() || '24px';
    gsap.fromTo(frame, { clipPath: `inset(0% ${side} 0% ${side} round 8px)` }, { clipPath: 'inset(0% 0px 0% 0px round 8px)', ease: 'none', scrollTrigger: { trigger: r, start: 'top 85%', end: 'top 10%', scrub: true } });
    gsap.fromTo(im, { scale: 1.18 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: r, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Selected-work stack: each panel recedes as the next slides over it.
  const items = $$('[data-stack-item]');
  items.forEach((it, i) => {
    const media = $('.stack__media', it), copy = $('.stack__copy', it);
    gsap.from($$('.pill, .stack__title, .stack__meta', it), { yPercent: 40, opacity: 0, duration: 1.1, stagger: .07, ease: E, scrollTrigger: { trigger: it, start: 'top 55%' } });
    const nxt = items[i + 1];
    if (nxt) gsap.to($('.stack__link', it), { scale: 0.88, ease: 'none', scrollTrigger: { trigger: nxt, start: 'top bottom', end: 'top top', scrub: true } });

  });

  // Manifesto: words brighten in reading order as the paragraph scrolls through.
  const words = $$('[data-manifesto] .w');
  if (words.length) gsap.to(words, { opacity: 1, ease: 'none', stagger: .1, scrollTrigger: { trigger: '[data-manifesto]', start: 'top 80%', end: 'bottom 45%', scrub: true } });

  // Giant word slides sideways with the scroll.
  $$('[data-bigword]').forEach((bw) => {
    const t = $('.bigword__t', bw);
    gsap.fromTo(t, { x: () => innerWidth * 0.15 }, { x: () => -(t.scrollWidth - innerWidth * 0.9), ease: 'none', scrollTrigger: { trigger: bw, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } });
  });

  // Full-screen photo: slow parallax as it passes.
  $$('.bleed').forEach((sec) => gsap.fromTo($('.bleed__img', sec), { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } }));

  // Contact rows rise in one after another.
  if ($('.contact__row')) gsap.from('.contact__row', { y: 28, opacity: 0, duration: 1, stagger: .08, ease: E, delay: .5 });
  if ($('.contact__intro')) gsap.from('.contact__intro', { y: 16, opacity: 0, duration: 1, ease: E, delay: .45 });

  // Generic reveals.
  $$('[data-reveal]').forEach((el) => gsap.from(el, { y: 36, opacity: 0, duration: 1.1, ease: E, scrollTrigger: { trigger: el, start: 'top 88%' } }));
  $$('.reveal-media').forEach((el) => {
    const im = $('img', el);
    gsap.fromTo(el, { clipPath: 'inset(18% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: E, scrollTrigger: { trigger: el, start: 'top 90%' } });
    if (im && !im.classList.contains('parallax')) gsap.from(im, { scale: 1.12, duration: 1.6, ease: E, scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  $$('img.parallax').forEach((im) => {
    const box = im.closest('figure') || im.parentElement;
    gsap.fromTo(im, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: box, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Section headings rise in.
  $$('.h-section, .focus__row, .ftr__col').forEach((el) => gsap.from(el, { yPercent: 30, opacity: 0, duration: 1.1, ease: E, scrollTrigger: { trigger: el, start: 'top 92%' } }));

  // Areas of Focus: each line lights up as it crosses the middle of the screen.
  // The last row stays lit once you've scrolled past it.
  const highlight = (els, at) => els.forEach((el, i) => ScrollTrigger.create({ trigger: el, start: `top ${at}`, end: i === els.length - 1 ? 'bottom top' : `bottom ${at}`, toggleClass: 'is-active' }));
  highlight($$('[data-focus] .focus__row'), '62%');

  // Process: light the step at the viewport center, fill the meter.
  const steps = $$('[data-step]'), bar = $('[data-process-bar]');
  highlight(steps, '60%');
  if (bar) gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.process__list', start: 'top 60%', end: 'bottom 60%', scrub: true } });

  // Stats count up.
  $$('[data-count]').forEach((el) => {
    const raw = el.dataset.count, m = raw.match(/^([^\d]*)([\d,]+)(.*)$/);
    if (!m) return;
    const end = +m[2].replace(/,/g, ''), o = { v: 0 };
    gsap.to(o, { v: end, duration: 1.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' }, onUpdate: () => (el.textContent = m[1] + Math.round(o.v).toLocaleString('en-US') + m[3]) });
  });

  // Marquee speeds up briefly with scroll velocity.
  if (lenis) $$('[data-marquee] .marquee__track').forEach((t) => {
    lenis.on('scroll', ({ velocity }) => { const a = t.getAnimations()[0]; if (a) a.playbackRate = 1 + Math.min(Math.abs(velocity) / 6, 5); });
  });

  addEventListener('load', () => ScrollTrigger.refresh());
})();
