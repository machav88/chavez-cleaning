/**
 * Tiny, always-loaded entry. Defers the effects module (and, only when
 * needed, the Motion library) until the browser is idle, so nothing here
 * competes with the first paint.
 */
const needsFx = document.querySelector('[data-reveal], [data-tilt], [data-count], [data-chapters], [data-autoplay], [data-ticker], .fx-title, .photo-in');

if (needsFx) {
  const load = () => import('./fx').then((m) => m.init());
  if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 2500 });
  else setTimeout(load, 1200);
}
