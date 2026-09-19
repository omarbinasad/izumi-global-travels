/**
 * Preloader.
 *
 * The overlay leaves by itself: its exit is a CSS animation with a delay, so
 * the page is never held hostage by this module. All this adds is leaving
 * sooner — as soon as the page has loaded — and taking the element out of the
 * document once it has faded, so nothing invisible is left over the page.
 */

import { qs, on } from '../core/dom.js';

export function initPreloader(scope = document) {
  const preloader = qs('[data-preloader]', scope);

  if (!preloader) return;

  function leave() {
    preloader.dataset.state = 'done';
  }

  /* Gone either way: after the early exit, or after the stylesheet's own. */
  on(preloader, 'animationend', (event) => {
    if (event.target === preloader) preloader.remove();
  });

  /* A module runs before `load`, but a cached page can already be complete. */
  if (document.readyState === 'complete') leave();
  else on(window, 'load', leave, { once: true });
}
