/**
 * Header elevation.
 *
 * The bar only lifts off the page once the page has moved under it. At the top
 * it should read as part of the page; once content is sliding beneath it, the
 * shadow says it is a fixed layer.
 *
 * Presentation only. The shadow lives in the stylesheet; this sets one
 * attribute, and with the module absent the header is simply always flat.
 */

import { qs, on } from '../core/dom.js';

/* A few pixels of slack, so a rubber-band bounce at the top of the page does
   not flicker the shadow on and off. */
const THRESHOLD = 4;

export function initHeaderShadow(scope = document) {
  const header = qs('[data-site-header]', scope);

  if (!header) return;

  function update() {
    header.dataset.scrolled = String(window.scrollY > THRESHOLD);
  }

  on(window, 'scroll', update, { passive: true });

  /* Reloading part-way down a page starts scrolled. */
  update();
}
