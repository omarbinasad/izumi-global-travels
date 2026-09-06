/**
 * Upper-case fields.
 *
 * A traveller name goes to the airline in capitals, the way it is printed in
 * the machine-readable zone of a passport, so the field takes what is typed
 * and puts it in capitals as it is typed — whatever the keyboard sent.
 *
 * The stylesheet does the same to the text on screen, so a browser without
 * this module still shows capitals; this is what makes the *value* capitals.
 * The backend upper-cases the name again on the way to the airline — a value
 * arriving from a script, or from a browser with this module absent, is not
 * this module's to guarantee.
 */

import { qsa, on } from '../core/dom.js';

export function initUpperCase(root = document) {
  qsa('[data-uppercase]', root).forEach((input) => {
    on(input, 'input', () => {
      const upper = input.value.toUpperCase();

      if (upper === input.value) return;

      /* Putting the value back moves the caret to the end, which makes editing
         the middle of a name impossible. Upper-casing Latin letters does not
         change the length, so the old offsets still hold. */
      const { selectionStart, selectionEnd } = input;

      input.value = upper;

      if (selectionStart !== null) input.setSelectionRange(selectionStart, selectionEnd);
    });
  });
}
