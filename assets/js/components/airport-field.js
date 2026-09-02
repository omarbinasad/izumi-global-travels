/**
 * Airport picker.
 *
 * The list is rendered in the markup, not built here — the backend decides
 * which airports to offer, and the frontend only shows them and reports which
 * one was chosen. Picking one writes four things: the city shown in the box,
 * the code beside it, the airport name under it, and the hidden IATA field,
 * which is the only value the form actually submits.
 *
 * Typing a city name does not resolve to a code. That needs a lookup the
 * backend owns; until then the code stays whatever was last chosen.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initAirportFields(root = document) {
  const fields = qsa('[data-airport-field]', root);

  if (fields.length === 0) return;

  fields.forEach((field) => {
    const input = qs('[data-airport]', field);
    const list = qs('[data-airport-list]', field);

    if (!input || !list) return;

    /* True only while a choice is being applied. */
    let picking = false;

    function open() {
      if (!list.hidden) return;

      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      place();
    }

    function close() {
      list.hidden = true;
      input.setAttribute('aria-expanded', 'false');
    }

    /* The search panel sits low in the hero, so a list dropped below it can
       run off the screen. Presentation only. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = list.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      list.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function choose(option) {
      const code = qs('[data-airport-code]', field);
      const sub = qs('[data-airport-sub]', field);
      const value = qs('[data-airport-value]', field);

      input.value = option.dataset.city;
      if (code) code.textContent = option.dataset.iata;
      if (sub) sub.textContent = option.dataset.name;
      /* The code, never the label: this is what the backend receives. */
      if (value) value.value = option.dataset.iata;

      qsa('[data-airport-option]', field).forEach((other) => {
        other.setAttribute('aria-current', String(other === option));
      });

      /* Focus goes back to the box, which would otherwise reopen the list
         through the focus handler below. */
      picking = true;
      input.focus();
      picking = false;

      close();
    }

    on(input, 'focus', () => { if (!picking) open(); });
    on(input, 'pointerdown', open);

    qsa('[data-airport-option]', field).forEach((option) => {
      on(option, 'click', () => choose(option));
    });

    on(field, 'keydown', (event) => {
      if (event.key !== 'Escape' || list.hidden) return;

      event.stopPropagation();
      close();
      input.focus();
    });

    on(document, 'pointerdown', (event) => {
      if (!list.hidden && !field.contains(event.target)) close();
    });
  });
}
