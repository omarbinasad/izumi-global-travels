/**
 * Fields that only take certain characters.
 *
 * A traveller name and a passport number both go to the airline as a narrow
 * set of characters, so these fields drop anything outside it as it is typed
 * or pasted, rather than letting it through and refusing the form later.
 *
 * Which set is named in the markup by `data-allow`, not written there: a
 * regular expression in an attribute is a rule nobody can read, and one the
 * backend cannot share. The field also carries `pattern`, so a browser without
 * this module refuses the same thing on submit, and the backend checks it
 * again — nothing here is a guarantee, only what stops a wrong character being
 * typed at all.
 */

import { qsa, on } from '../core/dom.js';

const SETS = {
  /* Letters, and the three marks that appear in real names. */
  name: /[^A-Za-z '.-]/g,

  /* Passport numbers are letters and digits, nothing else. */
  document: /[^A-Za-z0-9]/g,
};

export function initTextFilter(root = document) {
  qsa('[data-allow]', root).forEach((input) => {
    const drop = SETS[input.dataset.allow];

    if (!drop) return;

    on(input, 'input', () => {
      const kept = input.value.replace(drop, '');

      if (kept === input.value) return;

      /* How much of what was removed sat before the caret: the caret moves
         back by exactly that much, so typing in the middle still works. */
      const at = input.selectionStart ?? input.value.length;
      const removed = at - input.value.slice(0, at).replace(drop, '').length;

      input.value = kept;
      input.setSelectionRange(at - removed, at - removed);
    });
  });
}
