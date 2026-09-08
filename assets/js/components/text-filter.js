/**
 * Fields that only take certain characters.
 *
 * A traveller name and a passport number both go to the airline as a narrow
 * set of characters, so these fields drop anything outside it as it is typed
 * or pasted, rather than letting it through and refusing the form later.
 *
 * A name is letters and spaces. The only marks it may hold are a dot and an
 * apostrophe — MARY J. SMITH, O'BRIEN — and only between letters, so a run of
 * punctuation cannot be typed at all. The one exception is the space after an
 * initial's dot, which is a real part of a name and not a second mark.
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
    allow: /[A-Za-z '.]/,
    mark: /[ '.]/,
    /* The only mark that may follow another: the space after an initial. */
    afterMark: (ch, previous) => ch === ' ' && previous === '.',
  },

  /* Passport numbers are letters and digits, nothing else. */
  document: { allow: /[A-Za-z0-9]/ },
};

function accepts(ch, previous, set) {
  if (!set.allow.test(ch)) return false;
  if (!set.mark?.test(ch)) return true;

  /* A mark has to attach to something, and to a letter by preference. */
  if (previous === '') return false;
  if (!set.mark.test(previous)) return true;

  return set.afterMark ? set.afterMark(ch, previous) : false;
}

/**
 * The value with everything the set refuses taken out, and how much of that
 * sat before the caret — which is how far the caret moves back.
 */
function clean(value, set, caret) {
  let kept = '';
  let dropped = 0;

  for (let i = 0; i < value.length; i += 1) {
    if (accepts(value[i], kept.slice(-1), set)) kept += value[i];
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
