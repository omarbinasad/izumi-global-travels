/**
 * Fields that only take certain characters.
 *
 * A traveller name and a passport number both go to the airline as a narrow
 * set of characters, so these fields drop anything outside it as it is typed
 * or pasted, rather than letting it through and refusing the form later.
 *
 * A name is letters. It may hold a space, a hyphen or an apostrophe — MARY
 * ANNE, O'BRIEN, JEAN-LUC are all real — but only between letters and never
 * two together, so a run of dashes or dots cannot be typed at all.
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
  name: {
    allow: /[A-Za-z '-]/,
    /* A mark needs a letter before it, so it cannot open the name or follow
       another mark. */
    needsLetter: /[ '-]/,
  },

  /* Passport numbers are letters and digits, nothing else. */
  document: { allow: /[A-Za-z0-9]/ },
};

/**
 * The value with everything the set refuses taken out, and how much of that
 * sat before the caret — which is how far the caret moves back.
 */
function clean(value, set, caret) {
  let kept = '';
  let dropped = 0;

  for (let i = 0; i < value.length; i += 1) {
    const ch = value[i];
    const previous = kept.slice(-1);
    const ok = set.allow.test(ch)
      && !(set.needsLetter?.test(ch) && (previous === '' || set.needsLetter.test(previous)));

    if (ok) kept += ch;
    else if (i < caret) dropped += 1;
  }

  return { kept, dropped };
}

export function initTextFilter(root = document) {
  qsa('[data-allow]', root).forEach((input) => {
    const set = SETS[input.dataset.allow];

    if (!set) return;

    on(input, 'input', () => {
      const caret = input.selectionStart ?? input.value.length;
      const { kept, dropped } = clean(input.value, set, caret);

      if (kept === input.value) return;

      input.value = kept;
      input.setSelectionRange(caret - dropped, caret - dropped);
    });
  });
}
