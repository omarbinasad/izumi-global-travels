/**
 * Locale switch.
 *
 * The control works without this module: the tabs and the options are radios,
 * so the two lists swap and a choice sticks on its own. All this adds is the
 * summary label, and the dismissals a pop-out needs.
 *
 * Nothing here changes the site's language or currency — that is a page the
 * backend renders. The chosen values are ordinary form values for it to read.
 */

import { qsa, qs, on } from '../core/dom.js';

export function initLocale(root = document) {
  const switches = qsa('[data-locale]', root);

  if (switches.length === 0) return;

  switches.forEach((box) => {
    const label = qs('[data-locale-label]', box);
    const currencies = qsa('[data-locale-currency]', box);
    const languages = qsa('[data-locale-language]', box);

    function update() {
      if (!label) return;

      const language = languages.find((input) => input.checked)?.value ?? '';
      const currency = currencies.find((input) => input.checked)?.value ?? '';
      label.textContent = [language, currency].filter(Boolean).join('/');
    }

    [...currencies, ...languages].forEach((input) => {
      on(input, 'change', () => {
        update();
        /* Choosing is the end of the interaction, so the pop-out closes and
           focus goes back to the control that opened it. */
        box.open = false;
        qs('summary', box)?.focus();
      });
    });

    on(document, 'pointerdown', (event) => {
      if (box.open && !box.contains(event.target)) box.open = false;
    });

    on(box, 'keydown', (event) => {
      if (event.key !== 'Escape' || !box.open) return;
      box.open = false;
      qs('summary', box)?.focus();
    });

    update();
  });
}
