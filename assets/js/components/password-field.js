/**
 * Password reveal.
 *
 * A password field marked `data-password` gets a button that turns it into a
 * text field and back. The markup ships without that button because a control
 * that does nothing without JavaScript is worse than no control: with this
 * module absent the field is an ordinary password box.
 *
 * Nothing is stored or sent. The value only ever lives in the field, and the
 * backend is what checks it.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initPasswordFields(root = document) {
  qsa('[data-password]', root).forEach((input) => {
    const field = input.closest('.field__password');

    if (!field) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'password-toggle';
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('aria-label', 'Show password');
    button.innerHTML = '<svg class="icon size-5" aria-hidden="true"><use href="#i-eye"></use></svg>';

    field.append(button);

    const use = qs('use', button);

    on(button, 'click', () => {
      const shown = input.type === 'text';

      input.type = shown ? 'password' : 'text';
      button.setAttribute('aria-pressed', String(!shown));
      button.setAttribute('aria-label', shown ? 'Show password' : 'Hide password');
      use.setAttribute('href', shown ? '#i-eye' : '#i-eye-off');

      /* The caret goes back to the end, so the field can be carried on. */
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  });
}
