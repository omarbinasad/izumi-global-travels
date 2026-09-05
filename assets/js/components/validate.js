/**
 * Form validation feedback.
 *
 * A convenience only. Laravel form requests validate everything again and are
 * the only authority — see docs/form-fields.md. Nothing here decides whether a
 * booking may proceed; it just saves a round trip for the obvious mistakes.
 *
 * The check itself is the browser's own constraint validation, so `required`,
 * `type="email"` and the rest stay declared in the markup where the backend
 * developer can see them. This only turns the result into a red border and a
 * line of text under the field.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initValidation(root = document) {
  qsa('[data-validate]', root).forEach((form) => {
    /* Fields the browser has a rule for. Anything without one is skipped. */
    const fields = () => qsa('input, select, textarea', form).filter((el) => el.willValidate);

    function messageFor(control) {
      /* The markup's own wording first: it is translatable and specific. */
      if (control.validity.valueMissing && control.dataset.required) return control.dataset.required;
      if (control.dataset.invalid && !control.validity.valueMissing) return control.dataset.invalid;

      return control.validationMessage;
    }

    /*
     * Strictly the control's own .field. An earlier version fell back to the
     * label's parent, which for a checkbox sitting loose in the form resolved
     * to the form itself — and then cleared the first message on the page.
     * A control with no .field simply gets no message.
     */
    function slot(control) {
      const field = control.closest('.field');

      return field ? qs('[data-field-error]', field) : null;
    }

    function clear(control) {
      const target = slot(control);

      control.removeAttribute('aria-invalid');

      if (target) {
        target.textContent = '';
        target.hidden = true;
      }
    }

    function mark(control) {
      const target = slot(control);

      control.setAttribute('aria-invalid', 'true');

      if (target) {
        target.textContent = messageFor(control);
        target.hidden = false;
      }
    }

    function check(control) {
      if (control.checkValidity()) {
        clear(control);
        return true;
      }

      mark(control);
      return false;
    }

    on(form, 'submit', (event) => {
      const invalid = fields().filter((control) => !check(control));

      if (invalid.length === 0) return;

      /* The browser would otherwise show its own bubble on the first one. */
      event.preventDefault();
      invalid[0].focus();
    });

    /* Only re-check a field once it has been marked: telling someone their
       email is wrong while they are still typing it is noise. */
    fields().forEach((control) => {
      on(control, 'blur', () => {
        if (control.getAttribute('aria-invalid') === 'true' || control.value !== '') check(control);
      });

      on(control, 'input', () => {
        if (control.getAttribute('aria-invalid') === 'true') check(control);
      });

      on(control, 'change', () => {
        if (control.getAttribute('aria-invalid') === 'true') check(control);
      });
    });
  });
}
