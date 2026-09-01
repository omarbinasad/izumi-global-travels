/**
 * Filter drawer on the search results page.
 *
 * One <details> serves both layouts: the static sidebar at the sidebar
 * breakpoint, a sheet over the results below it. The markup ships open, so
 * with no JavaScript the filters are simply present and inline. This module
 * only keeps the open state in step with the breakpoint and adds the
 * dismissals a sheet needs.
 *
 * Nothing here filters anything: the backend returns the result set.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Matches the CSS breakpoint where the panel becomes the sidebar. */
const SIDEBAR = '(width >= 64rem)';

export function initFilters(scope = document) {
  const drawer = qs('[data-filter-drawer]', scope);

  if (!drawer) return;

  const trigger = qs('[data-filter-trigger]', drawer);
  const sidebar = window.matchMedia(SIDEBAR);

  function lockScroll(locked) {
    if (locked) document.documentElement.dataset.scrollLock = 'true';
    else delete document.documentElement.dataset.scrollLock;
  }

  function close() {
    if (sidebar.matches) return;

    drawer.open = false;
    /* Send focus back to what opened the sheet, not to the top of the page. */
    trigger?.focus();
  }

  /* Open is the sidebar's resting state; the sheet's is closed. */
  function applyBreakpoint() {
    drawer.open = sidebar.matches;
  }

  on(sidebar, 'change', applyBreakpoint);
  on(drawer, 'toggle', () => lockScroll(drawer.open && !sidebar.matches));

  /* A click that lands on the details box itself landed on the backdrop: the
     trigger and the sheet are its only children, and both sit above it. */
  on(drawer, 'click', (event) => {
    if (event.target === drawer) close();
  });

  on(document, 'keydown', (event) => {
    if (event.key === 'Escape' && drawer.open) close();
  });

  qsa('[data-filter-close]', drawer).forEach((button) => on(button, 'click', close));

  applyBreakpoint();
}
