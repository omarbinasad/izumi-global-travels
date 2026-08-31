/**
 * Header navigation.
 *
 * Below 1024px the primary nav and header actions collapse into a drawer.
 * The links exist in the HTML at every width — this only shows and hides them,
 * so navigation still works with JavaScript disabled.
 */

import { qs, on } from '../core/dom.js';

const DESKTOP_QUERY = '(min-width: 1024px)';

export function initNavigation(scope = document) {
  const toggle = qs('[data-nav-toggle]', scope);
  const panel = qs('[data-nav-panel]', scope);

  if (!toggle || !panel) return;

  const desktop = window.matchMedia(DESKTOP_QUERY);

  function setOpen(isOpen) {
    toggle.setAttribute('aria-expanded', String(isOpen));
    panel.dataset.open = String(isOpen);
  }

  setOpen(false);

  on(toggle, 'click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  on(document, 'keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  /* A click outside the header closes the drawer. */
  on(document, 'click', (event) => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (event.target.closest('[data-site-header]')) return;
    setOpen(false);
  });

  /* Reaching the desktop breakpoint resets the collapsed state. */
  on(desktop, 'change', (event) => {
    if (event.matches) setOpen(false);
  });
}
