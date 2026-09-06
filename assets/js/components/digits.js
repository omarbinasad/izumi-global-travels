/**
 * Digits-only fields.
 *
 * A phone number reaches the airline as digits with the dialling code beside
 * it, so the field takes the digits out of whatever is typed or pasted and
 * drops the rest — spaces, dashes, brackets and a leading plus included.
 *
 * The markup still carries `inputmode`, `pattern` and `maxlength`, so a
 * browser without this module offers a numeric keypad and refuses anything
 * else on submit. The backend validates the number again; nothing here is a
 * guarantee, only the thing that stops a wrong character being typed at all.
 */

import { qsa, on } from '../core/dom.js';

export function initDigitsOnly(root = document) {
  qsa('[data-digits]', root).forEach((input) => {
    on(input, 'input', () => {
      const digits = input.value.replace(/\D/g, '');

      if (digits === input.value) return;

      /* How much of what was removed sat before the caret: the caret moves
         back by exactly that much, so typing in the middle still works. */
      const at = input.selectionStart ?? input.value.length;
      const removed = at - input.value.slice(0, at).replace(/\D/g, '').length;

      input.value = digits;
      input.setSelectionRange(at - removed, at - removed);
    });
  });
}
