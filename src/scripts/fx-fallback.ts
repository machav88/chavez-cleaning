/**
 * Motion (motion.dev) reveal fallback for browsers without CSS scroll-driven
 * animations. Static named imports keep this chunk tree-shaken; it is only
 * ever loaded via dynamic import from fx.ts.
 */
import { animate } from 'motion/mini';
import { inView } from 'motion';

export function reveal(targets: HTMLElement[]) {
  document.documentElement.classList.add('fx-fallback');
  targets.forEach((el) => el.classList.add('fx-pending'));
  inView(
    targets,
    (el) => {
      const node = el as HTMLElement;
      animate(node, { translate: ['0 44px', '0 0'] }, { duration: 0.6, ease: [0.22, 1, 0.36, 1] }).finished.then(() =>
        node.classList.remove('fx-pending'),
      );
    },
    { margin: '0px 0px -10% 0px' },
  );
}
