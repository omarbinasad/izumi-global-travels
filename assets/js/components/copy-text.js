/**
 * Copy a reference to the clipboard.
 *
 * `data-copy="<id>"` on a button names the element whose text it copies. The
 * text is on the page either way, so with this module absent the button is the
 * only thing missing and the reference can still be read and selected.
 *
 * The button says what happened for a moment through `data-copied`, which the
 * stylesheet shows; nothing is announced twice, and nothing is stored.
 */

import { qsa, on } from '../core/dom.js';

export function initCopyText(scope = document) {
  const buttons = qsa('[data-copy]', scope);

  if (buttons.length === 0 || !navigator.clipboard) return;

  buttons.forEach((button) => {
    const source = document.getElementById(button.dataset.copy);

    if (!source) return;

    let timer = null;

    on(button, 'click', async () => {
      try {
        await navigator.clipboard.writeText(source.textContent.trim());
      } catch {
        /* Denied or unavailable: leave the button as it was, the text is
           still there to select by hand. */
        return;
      }

      button.dataset.copied = 'true';
      window.clearTimeout(timer);
      timer = window.setTimeout(() => delete button.dataset.copied, 1600);
    });
  });
}
