/**
 * Airport picker.
 *
 * The list is rendered in the markup, not built here — the backend decides
 * which airports to offer, and the frontend only shows them and reports which
 * one was chosen. Picking one writes four things: the city shown in the box,
 * the code beside it, the airport name under it, and the hidden IATA field,
 * which is the only value the form actually submits.
 *
 * Typing narrows that list by code, city and airport name. It searches what is
 * already on the page and nothing else: resolving free text to an airport is a
 * lookup the backend owns, so a search that matches nothing leaves the code
 * alone rather than guessing at one.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initAirportFields(root = document) {
  const fields = qsa('[data-airport-field]', root);

  if (fields.length === 0) return;

  fields.forEach((field) => {
    const input = qs('[data-airport]', field);
    const list = qs('[data-airport-list]', field);

    if (!input || !list) return;

    const options = qsa('[data-airport-option]', field);
    const empty = qs('[data-airport-empty]', field);

    /* True only while a choice is being applied. */
    let picking = false;

    function open() {
      if (list.hidden) {
        list.hidden = false;
        input.setAttribute('aria-expanded', 'true');
      }

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

    /* Matches the code, the city and the airport name, so "nrt", "tok" and
       "narita" all find the same airport. */
    function filter(query) {
      const needle = query.trim().toLowerCase();
      let matches = 0;

      options.forEach((option) => {
        const { iata = '', city = '', name = '' } = option.dataset;
        const hit = needle === '' ||
          `${iata} ${city} ${name}`.toLowerCase().includes(needle);

        /* The row, not the button: hiding the button would leave its bullet. */
        option.closest('li').hidden = !hit;

        if (hit) matches += 1;
      });

      if (empty) empty.hidden = matches > 0;
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

      options.forEach((other) => {
        other.setAttribute('aria-current', String(other === option));
      });

      /* Focus goes back to the box, which would otherwise reopen the list
         through the focus handler below. */
      picking = true;
      input.focus();
      picking = false;

      close();
    }

    /* Opening the field offers everything; typing is what narrows it. The box
       holds the last chosen city, which is not a search the visitor made. */
    function reveal() {
      filter('');
      open();
    }

    on(input, 'focus', () => { if (!picking) reveal(); });
    on(input, 'pointerdown', reveal);

    on(input, 'input', () => {
      filter(input.value);
      open();
    });

    options.forEach((option) => {
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
