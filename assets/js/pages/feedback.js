/**
 * Feedback page. Loaded by main.js because <body data-page="feedback">.
 * It only wires up components; behaviour lives with each component.
 */

import { qs, on } from '../core/dom.js';
import { initValidation } from '../components/validate.js';

export function init() {
  initValidation();

  /*
   * The page is static, so a valid form has nowhere to POST to: it walks to the
   * thank-you page instead. Laravel drops this — the form posts to the feedback
   * route and the controller redirects there once the message is stored.
   */
  const form = qs('[data-validate]');

  if (!form) return;

  on(form, 'submit', (event) => {
    if (event.defaultPrevented) return;

    event.preventDefault();
    window.location.assign(form.getAttribute('action'));
  });
}
