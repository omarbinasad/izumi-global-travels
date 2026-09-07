/**
 * Field guidance, shown when the field is entered.
 *
 * The panel is a tooltip on its own small button, which is a good way to ask
 * for guidance and a poor way to be given it: someone about to type a name has
 * already stopped looking at the little i beside the label. So entering the
 * field it belongs to shows the same panel for a few seconds, then lets it go
 * rather than sitting over the box being typed in.
 *
 * The hover and focus behaviour is the stylesheet's and is untouched, so with
 * this module absent the button still works exactly as it did.
 */

import { qsa, on } from '../core/dom.js';

/* Long enough to read the two lines, short enough that it is gone by the time
   it would be in the way. */
const LINGER = 3000;

export function initHints(root = document) {
  qsa('[data-hint-for]', root).forEach((hint) => {
    /* The hint names its field rather than reaching for a neighbour, so the
       markup around either one can change without breaking the pairing. */
    const control = root.getElementById
      ? root.getElementById(hint.dataset.hintFor)
      : document.getElementById(hint.dataset.hintFor);

    if (!control) return;

    let timer = 0;

    function hide() {
      window.clearTimeout(timer);
      delete hint.dataset.shown;
    }

    on(control, 'focus', () => {
      hint.dataset.shown = 'true';
      window.clearTimeout(timer);
      timer = window.setTimeout(hide, LINGER);
    });

    /* Leaving the field early takes the panel with it. */
    on(control, 'blur', hide);
  });
}
