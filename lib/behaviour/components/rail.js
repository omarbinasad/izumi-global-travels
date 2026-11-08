/**
 * Scroll rail.
 *
 * The rail is a CSS scroll-snap track, so it already works by touch, wheel and
 * keyboard with this module absent. All this adds is the pair of arrows a
 * pointer needs, which is why they ship hidden and are revealed here: a button
 * that does nothing without JavaScript is worse than no button.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initRail(root = document) {
  qsa('[data-rail-scope]', root).forEach((scope) => {
    const rail = qs('[data-rail]', scope);
    const nav = qs('[data-rail-nav]', scope);
    const prev = qs('[data-rail-prev]', scope);
    const next = qs('[data-rail-next]', scope);

    if (!rail || !prev || !next) return;

    nav?.removeAttribute('hidden');

    /* One card plus the gap between two of them, read from the layout rather
       than hard-coded: the rail shows a different number of cards per
       breakpoint. */
    function step() {
      const card = rail.firstElementChild;

      if (!card) return rail.clientWidth;

      const gap = parseFloat(getComputedStyle(rail).columnGap) || 0;
      return card.getBoundingClientRect().width + gap;
    }

    function update() {
      /* A pixel of slack: fractional widths mean scrollLeft rarely lands
         exactly on the end. */
      const end = rail.scrollWidth - rail.clientWidth - 1;

      prev.disabled = rail.scrollLeft <= 0;
      next.disabled = rail.scrollLeft >= end;
    }

    on(prev, 'click', () => rail.scrollBy({ left: -step(), behavior: 'smooth' }));
    on(next, 'click', () => rail.scrollBy({ left: step(), behavior: 'smooth' }));
    on(rail, 'scroll', update);
    on(window, 'resize', update);

    update();
  });
}
