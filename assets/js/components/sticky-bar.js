/**
 * The results bar, once it sticks.
 *
 * Below the sidebar breakpoint the bar holds the heading, the count and the
 * three controls, and it stays at the top of the results while they scroll. At
 * the top of the page the heading is redundant — the search bar above it names
 * the same route — so the stylesheet hides it there and shows it once the bar
 * has something scrolling under it.
 *
 * CSS cannot tell a stuck element from a resting one, so this marks it: the bar
 * is stuck exactly when it has reached the offset the stylesheet parks it at.
 * Nothing else changes, so with this module absent the bar simply keeps its
 * resting state and the heading stays hidden on a phone.
 */

import { qs, on } from '../core/dom.js';

export function initStickyBar(scope = document) {
  const bar = qs('[data-results-bar]', scope);

  if (!bar) return;

  /* Where the bar comes to rest, read from the stylesheet rather than repeated
     here. `auto` is a width that never sticks it, and reading it once per
     resize keeps the scroll handler to a single measurement. */
  let resting = NaN;

  function readOffset() {
    resting = parseFloat(getComputedStyle(bar).insetBlockStart);
    update();
  }

  function update() {
    bar.dataset.stuck = String(
      !Number.isNaN(resting) && bar.getBoundingClientRect().top <= resting + 1,
    );
  }

  readOffset();
  on(window, 'scroll', update, { passive: true });
  on(window, 'resize', readOffset);
}
