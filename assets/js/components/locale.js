/**
 * Locale switch.
 *
 * The control works without this module: the tabs and the options are radios,
 * so the two lists swap and a choice sticks on its own. All this adds is the
 * summary label, the dismissals a pop-out needs, and keeping the two copies of
 * the switch — the one in the bar and the one in the menu — telling the same
 * story.
 *
 * Nothing here changes the site's language or currency — that is a page the
 * backend renders. The chosen values are ordinary form values for it to read.
 */

import { qsa, qs, on } from '../core/dom.js';

export function initLocale(root = document) {
  const switches = qsa('[data-locale]', root);

  if (switches.length === 0) return;

  /*
   * Each copy is its own radio group. Sharing one group across both would look
   * tidier but leaves the tick in only one of them — and on a phone that is
   * the copy nobody can see. So the choice is carried across by hand instead.
   */
  const boxes = switches.map((box) => ({
    box,
    label: qs('[data-locale-label]', box),
    currencies: qsa('[data-locale-currency]', box),
    languages: qsa('[data-locale-language]', box),
  }));

  function labelFor(part) {
    return part.languages.find((input) => input.checked)?.value ?? '';
  }

  function refresh() {
    boxes.forEach((part) => {
      if (!part.label) return;

      const language = labelFor(part);
      const currency = part.currencies.find((input) => input.checked)?.value ?? '';
      part.label.textContent = [language, currency].filter(Boolean).join('/');
    });
  }

  /* The same value, chosen in every copy that offers it. */
  function carry(kind, value) {
    boxes.forEach((part) => {
      const match = part[kind].find((input) => input.value === value);

      if (match) match.checked = true;
    });
  }

  boxes.forEach((part) => {
    const { box } = part;

    [...part.currencies, ...part.languages].forEach((input) => {
      on(input, 'change', () => {
        carry(part.currencies.includes(input) ? 'currencies' : 'languages', input.value);
        refresh();

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
  });

  refresh();
}
