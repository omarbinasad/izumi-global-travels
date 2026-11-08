/**
 * Confirm field.
 *
 * A field carrying `data-match="<id>"` must hold the same value as the field
 * with that id — a repeated password, most often. The check is the browser's
 * own: this sets a custom validity on the field, so the message appears the
 * same way every other message on the form does and nothing else changes.
 *
 * It is a convenience, not a rule. The backend compares the two values again,
 * and it is the only thing that decides whether an account is created.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initConfirmFields(root = document) {
  qsa('[data-match]', root).forEach((confirm) => {
    const original = qs(`#${confirm.dataset.match}`, root);

    if (!original) return;

    function check() {
      /* An empty field is `required`'s business, not this one's. */
      const mismatch = confirm.value !== '' && confirm.value !== original.value;

      confirm.setCustomValidity(mismatch ? (confirm.dataset.invalid ?? 'The two values do not match.') : '');
    }

    on(confirm, 'input', check);
    on(original, 'input', check);

    check();
  });
}
