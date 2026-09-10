/**
 * Guests and rooms on the hotel search.
 *
 * The counts live in real number inputs inside a <details>, so the panel opens
 * and the form submits its own values with this module absent; what is added
 * here is the line on the closed field that reads them back.
 *
 * Nothing here decides how many guests a room takes or what a night costs —
 * the backend prices the search when it is sent.
 */

import { qs, qsa, on } from '../core/dom.js';
import { initPopout } from './popout.js';

const count = (input) => Number(input?.value) || 0;

const plural = (value, one, many) => `${value} ${value === 1 ? one : many}`;

export function initGuests(root = document) {
  qsa('[data-guests]', root).forEach((host) => {
    const guests = qs('[data-guests-count]', host);
    const rooms = qs('[data-rooms-count]', host);

    const summary = qs('[data-guests-summary]', host);
    const roomLine = qs('[data-guests-rooms]', host);

    function update() {
      if (summary && guests) summary.textContent = plural(count(guests), 'guest', 'guests');
      if (roomLine && rooms) roomLine.textContent = plural(count(rooms), 'room', 'rooms');
    }

    [guests, rooms].forEach((input) => {
      if (!input) return;

      on(input, 'input', update);
      on(input, 'change', update);
    });

    update();

    initPopout(host, qs('[data-guests-panel]', host));
  });
}
