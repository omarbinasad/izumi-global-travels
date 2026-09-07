/**
 * Back to top.
 *
 * The link needs nothing to work: "#top" is the top of the document in HTML,
 * and the smooth scroll is in the stylesheet. All this does is take it off the
 * screen while the page is already near the top, so with the module absent the
 * link is simply always there — and still goes where it says.
 */

import { qs, on } from '../core/dom.js';

/* About a screen down, so the control only appears once going back is a
   journey rather than a nudge. */
const THRESHOLD = 400;

export function initToTop(scope = document) {
  const link = qs('[data-to-top]', scope);

  if (!link) return;

  function update() {
    link.dataset.atTop = String(window.scrollY <= THRESHOLD);
  }

  on(window, 'scroll', update, { passive: true });

  /* Reloading part-way down a page starts scrolled. */
  update();
}
