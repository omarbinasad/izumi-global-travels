/**
 * Number stepper.
 *
 * The value still lives in a real <input type="number">, so the field submits
 * its own name and the browser enforces min and max with this module absent.
 * The two buttons are the enhancement: they are what a phone can use, and they
 * ship disabled-aware so a count cannot be pushed past its bounds.
 *
 * Nothing here decides how many passengers an offer allows — the backend
 * re-checks the party size when it prices the search.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initSteppers(root = document) {
  qsa('[data-stepper]', root).forEach((stepper) => {
    const input = qs('input', stepper);
    const down = qs('[data-stepper-down]', stepper);
    const up = qs('[data-stepper-up]', stepper);

    if (!input || !down || !up) return;

    const min = Number(input.min || 0);
    const max = Number(input.max || 99);

    const clamp = (value) => Math.min(max, Math.max(min, value));

    /* Keeps the buttons in step with the value, however it was changed. */
    function sync() {
      const value = clamp(Number(input.value) || min);

      if (String(value) !== input.value) input.value = String(value);

      down.disabled = value <= min;
      up.disabled = value >= max;
    }

    function step(by) {
      input.value = String(clamp((Number(input.value) || min) + by));

      /* The travellers summary listens for these, so a button press has to
         look exactly like someone typing in the field. */
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));

      sync();
    }

    on(down, 'click', () => step(-1));
    on(up, 'click', () => step(1));
    on(input, 'input', sync);
    on(input, 'change', sync);

    sync();
  });
}
