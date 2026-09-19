/**
 * Dialogs opened from a button.
 *
 * `data-dialog-open="<id>"` on a button opens the <dialog> with that id as a
 * modal. The dim behind it, the focus kept inside it and Escape closing it are
 * the browser's own; this adds only the opening, the buttons marked
 * `data-dialog-close`, and a click on the backdrop.
 *
 * The trigger is a working control on its own — a submit button in a form
 * that posts the same request — so with this module absent, or in a browser
 * without showModal, pressing it still reaches the team. Here it opens the
 * fuller form instead.
 */

import { qsa, on } from '../core/dom.js';

export function initDialogs(root = document) {
  qsa('[data-dialog-open]', root).forEach((trigger) => {
    const dialog = document.getElementById(trigger.dataset.dialogOpen);

    if (!dialog || typeof dialog.showModal !== 'function') return;

    on(trigger, 'click', (event) => {
      event.preventDefault();
      dialog.showModal();
    });
  });

  qsa('dialog[data-dialog]', root).forEach((dialog) => {
    qsa('[data-dialog-close]', dialog).forEach((button) => {
      on(button, 'click', () => dialog.close());
    });

    /* A click that lands on the dialog element itself landed on the backdrop:
       the content fills the box, so anything inside is one of its children. */
    on(dialog, 'click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  });
}
