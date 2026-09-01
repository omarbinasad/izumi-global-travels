/**
 * File field.
 *
 * The input is a real <input type="file"> inside its own label, so the field
 * works with this module absent: the browser opens its picker either way. All
 * this adds is the chosen file name, which a visually hidden input cannot
 * show on its own.
 *
 * Nothing is read or uploaded here. The file travels with the form post and
 * the backend is the only thing that validates or stores it.
 */

import { qsa, qs, on } from '../core/dom.js';

export function initFileField(root = document) {
  qsa('[data-file-field]', root).forEach((field) => {
    const input = qs('input[type="file"]', field);
    const name = qs('[data-file-name]', field);

    if (!input || !name) return;

    /* The empty-state wording lives in the markup, so it stays translatable
       and survives with no JavaScript. */
    const placeholder = name.textContent;

    on(input, 'change', () => {
      const file = input.files?.[0];

      name.textContent = file ? file.name : placeholder;
      field.dataset.filled = file ? 'true' : 'false';
    });
  });
}
