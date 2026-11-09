/**
 * Log in and create account. Loaded by main.js because <body data-page="auth">.
 * It only wires up components; behaviour lives with each component.
 */

import { initDigitsOnly } from '../components/digits.js';
import { initConfirmFields } from '../components/confirm-field.js';
import { initPasswordFields } from '../components/password-field.js';
import { initValidation } from '../components/validate.js';
import { qs, qsa, on } from '../core/dom.js';

export function init() {
  initDigitsOnly();
  initConfirmFields();
  initPasswordFields();
  initValidation();

  /*
   * The static page has nowhere to post to, so a form that passes its own
   * checks walks to the account instead. Nobody is authenticated by this: no
   * session, no token, nothing remembered. Laravel drops it — the forms post
   * to the auth routes and the controller decides where the browser goes.
   */
  qsa('[data-validate]', document).forEach((form) => {
    on(form, 'submit', (event) => {
      if (event.defaultPrevented) return;

      event.preventDefault();

      /* A reset request signs nobody in. Its answer is a page of its own, and
         the stand-in for that is already in the card, so this turns the card
         over instead of going anywhere. */
      const sent = form.dataset.sentPanel && qs('#' + form.dataset.sentPanel, document);

      if (sent) {
        form.hidden = true;
        sent.hidden = false;
        sent.focus();
        return;
      }

      window.location.assign('../account/profile.html');
    });
  });
}
