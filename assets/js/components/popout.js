/**
 * A <details> that drops a panel over the page.
 *
 * Shared by the travellers panel on the flight search and the guests panel on
 * the hotel one, because both sit at the foot of a search box where a panel
 * dropped downwards can run off the screen.
 *
 * Presentation and dismissal only: the disclosure still opens, and the form
 * still submits, with this module absent.
 */

import { qs, on } from '../core/dom.js';

export function initPopout(host, panel) {
  if (!host) return;

  if (panel) {
    on(host, 'toggle', () => {
      if (!host.open) return;

      const field = host.getBoundingClientRect();
      const height = panel.getBoundingClientRect().height;
      const below = window.innerHeight - field.bottom;

      /* Above only when it will not fit below and there is more room up there. */
      panel.dataset.drop = (height + 16 > below && field.top > below) ? 'up' : 'down';
    });
  }

  on(document, 'click', (event) => {
    if (host.open && !host.contains(event.target)) host.open = false;
  });

  on(host, 'keydown', (event) => {
    if (event.key !== 'Escape' || !host.open) return;

    host.open = false;
    qs('summary', host)?.focus();
  });
}
