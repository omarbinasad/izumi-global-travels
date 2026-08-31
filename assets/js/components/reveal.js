/**
 * Scroll-triggered entrance animations.
 *
 * This module only ever ADDS an attribute. The hidden state lives inside the
 * @keyframes in 6-utilities/animations.css, so content is visible without
 * JavaScript, without IntersectionObserver, and while this module is still
 * downloading. Nothing here is required to read the page.
 */

import { qsa, on } from '../core/dom.js';

/* Reveal a little before the element's top edge reaches the fold. */
const OBSERVER_OPTIONS = { rootMargin: '0px 0px -8% 0px', threshold: 0.05 };

export function initReveal(scope = document) {
  const items = qsa('[data-reveal]', scope);

  if (items.length === 0) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* Nothing to animate: leave every element in its natural, visible state. */
  if (reducedMotion.matches || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;

      entry.target.dataset.revealed = 'true';
      observer.unobserve(entry.target);
    }
  }, OBSERVER_OPTIONS);

  const viewportHeight = window.innerHeight;

  items.forEach((item) => {
    /*
     * Anything already on screen at load is left alone. Animating it would
     * mean showing it, hiding it and showing it again — a visible blink. The
     * hero handles its own entrance on load instead.
     */
    if (item.getBoundingClientRect().top < viewportHeight) return;

    observer.observe(item);
  });

  /* If the user turns reduced motion on mid-session, stop animating. */
  on(reducedMotion, 'change', (event) => {
    if (event.matches) observer.disconnect();
  });
}
