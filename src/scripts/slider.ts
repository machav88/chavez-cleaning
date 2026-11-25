/**
 * Lightweight snap slider: arrows + dots for any [data-slider] whose
 * [data-slider-track] scrolls horizontally. Native scroll-snap does the
 * swiping; this only adds controls. Hidden when nothing overflows.
 */
function initSlider(root: HTMLElement) {
  const found = root.querySelector<HTMLElement>('[data-slider-track]');
  if (!found) return;
  const track: HTMLElement = found;
  const prev = root.querySelector<HTMLButtonElement>('[data-slider-prev]');
  const next = root.querySelector<HTMLButtonElement>('[data-slider-next]');
  const dotsBox = root.querySelector<HTMLElement>('[data-slider-dots]');
  const ui = root.querySelector<HTMLElement>('.slider-ui');
  const items = Array.from(track.children) as HTMLElement[];
  let dots: HTMLButtonElement[] = [];

  const step = () => (items[1] ? items[1].offsetLeft - items[0].offsetLeft : track.clientWidth);
  const perView = () => Math.max(1, Math.round(track.clientWidth / step()));
  const pages = () => Math.max(1, items.length - perView() + 1);

  function build() {
    const overflow = track.scrollWidth > track.clientWidth + 4;
    if (ui) ui.hidden = !overflow;
    root.classList.toggle('is-sliding', overflow);
    if (!dotsBox) return;
    dotsBox.innerHTML = '';
    dots = Array.from({ length: pages() }, (_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'sl-dot';
      b.setAttribute('aria-label', `Go to slide ${i + 1}`);
      b.addEventListener('click', () => track.scrollTo({ left: i * step(), behavior: 'smooth' }));
      dotsBox.appendChild(b);
      return b;
    });
    update();
  }

  function update() {
    const i = Math.min(pages() - 1, Math.round(track.scrollLeft / step()));
    dots.forEach((d, k) => d.setAttribute('aria-current', String(k === i)));
    if (prev) prev.disabled = track.scrollLeft <= 4;
    if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }

  prev?.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next?.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  let raf = 0;
  track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(update); }, { passive: true });
  new ResizeObserver(build).observe(track);
}

document.querySelectorAll<HTMLElement>('[data-slider]').forEach(initSlider);

export {};
