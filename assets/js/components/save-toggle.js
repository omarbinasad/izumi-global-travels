/**
 * Save buttons.
 *
 * The heart on a hotel card records the intent and nothing more: what is saved
 * belongs to an account, and the backend is what remembers it. Blade posts the
 * change; here the button only shows which way it is set, so the state is real
 * to the person pressing it even though nothing is stored.
 *
 * `aria-pressed` is the state — the stylesheet reads the same attribute, so
 * what a screen reader is told and what the button looks like cannot drift.
 */

import { qsa, on } from '../core/dom.js';

export function initSaveToggles(root = document) {
  qsa('[data-save-toggle]', root).forEach((button) => {
    on(button, 'click', () => {
      const saved = button.getAttribute('aria-pressed') === 'true';

      button.setAttribute('aria-pressed', String(!saved));
    });
  });
}
