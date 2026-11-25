/**
 * Lazy-loaded effects (see fx-loader.ts):
 *  - chapter rail: marks the section in view (runs even with reduced motion);
 *  - pointer tilt + glare on [data-tilt] photos (fine pointers only);
 *  - counters on [data-count] (final number is already in the HTML);
 *  - Motion fallback for reveals in browsers without scroll-driven animations,
 *    applied only to elements still below the fold so nothing visible disappears.
 */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const supportsScrollTimeline = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');

function chapters() {
  const nav = document.querySelector<HTMLElement>('[data-chapters]');
  if (!nav) return;
  const links = new Map<string, HTMLAnchorElement>();
  nav.querySelectorAll<HTMLAnchorElement>('a[data-chapter]').forEach((a) => links.set(a.dataset.chapter!, a));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.removeAttribute('aria-current'));
        links.get(e.target.id)?.setAttribute('aria-current', 'location');
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  links.forEach((_, id) => {
    const el = document.getElementById(id);
    if (el) io.observe(el);
  });
}

function tilt() {
  if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const max = Number(card.dataset.tilt || 7);
    let frame = 0;
    card.addEventListener('pointermove', (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width;
        const y = (e.clientY - r.top) / r.height;
        card.classList.add('is-tilting');
        card.style.setProperty('--ry', `${(x - 0.5) * max * 2}deg`);
        card.style.setProperty('--rx', `${(0.5 - y) * max * 2}deg`);
        card.style.setProperty('--gx', `${x * 100}%`);
        card.style.setProperty('--gy', `${y * 100}%`);
        card.style.setProperty('--glare', '1');
      });
    });
    card.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame);
      card.classList.remove('is-tilting');
      ['--rx', '--ry'].forEach((p) => card.style.setProperty(p, '0deg'));
      card.style.setProperty('--glare', '0');
    });
  });
}

function counters() {
  if (reduce) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const end = Number(el.dataset.count);
        if (!Number.isFinite(end)) return;
        const start = performance.now();
        const dur = 1100;
        const step = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll('[data-count]').forEach((el) => io.observe(el));
}

async function revealFallback() {
  if (reduce || supportsScrollTimeline) return;
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], .photo-in')).filter(
    (el) => el.getBoundingClientRect().top > window.innerHeight,
  );
  if (!targets.length) return;
  const { reveal } = await import('./fx-fallback');
  reveal(targets);
}

/**
 * Background videos: autoplay (muted) only while in view. With reduced motion or
 * Save-Data they never start on their own, but the Play button is still offered.
 * If the browser rejects an autoplay attempt, it is retried once the video can
 * play or the tab becomes visible again.
 */
/** Start decorative videos only after the visitor's first gesture, so they never cost main-thread time during load. */
function afterGesture(fn: () => void) {
  const evs = ['pointerdown', 'scroll', 'keydown', 'touchstart', 'wheel'] as const;
  let done = false;
  const go = () => { if (done) return; done = true; evs.forEach((e) => removeEventListener(e, go)); fn(); };
  evs.forEach((e) => addEventListener(e, go, { once: true, passive: true }));
}

function videos() {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  const autoDefault = !reduce && !saveData;
  document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]').forEach((video) => {
    if (!video.getClientRects().length) return; // hidden (e.g. desktop-only hero video on phones): never download
    const toggle = video.closest('section')?.querySelector<HTMLButtonElement>('[data-video-toggle]');
    const auto = video.dataset.autoplay === 'always' || autoDefault;
    let userPaused = !auto;
    let inView = false;
    video.muted = true;
    const setState = (playing: boolean) => toggle?.setAttribute('data-paused', String(!playing));
    const tryPlay = () => {
      if (!inView || userPaused || !video.paused) return;
      video.play().catch(() => {});
    };
    new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView) tryPlay();
        else video.pause();
      },
      { threshold: 0.25 },
    ).observe(video);
    video.addEventListener('canplay', tryPlay);
    document.addEventListener('visibilitychange', () => document.visibilityState === 'visible' && tryPlay());
    video.addEventListener('play', () => setState(true));
    video.addEventListener('playing', () => video.classList.add('is-playing'));
    if (!video.paused && video.readyState > 2) video.classList.add('is-playing');
    video.addEventListener('pause', () => setState(false));
    if (auto) video.preload = 'auto';
    if (toggle) {
      toggle.hidden = false;
      setState(false);
      toggle.addEventListener('click', () => {
        if (video.paused) { userPaused = false; video.play().catch(() => {}); }
        else { userPaused = true; video.pause(); }
      });
    }
  });
}

/** Place-name ticker: starts moving only here, so its pause button always exists. */
function tickers() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-ticker]').forEach((t) => {
    const btn = t.querySelector<HTMLButtonElement>('[data-ticker-toggle]');
    if (!btn) return;
    btn.hidden = false;
    t.classList.add('is-live');
    btn.addEventListener('click', () => {
      const paused = t.classList.toggle('is-paused');
      btn.setAttribute('aria-label', paused ? 'Play the moving list of place names' : 'Pause the moving list of place names');
    });
  });
}

export function init() {
  tickers();
  afterGesture(videos);
  chapters();
  tilt();
  counters();
  void revealFallback();
}
