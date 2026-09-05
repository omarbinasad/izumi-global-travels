/**
 * Passenger step. Loaded by main.js because <body data-page="passengers">.
 * It only wires up components; behaviour lives with each component.
 */

import { qs, on } from '../core/dom.js';
import { initFileField } from '../components/file-field.js';
import { initPhoneFields } from '../components/phone-field.js';
import { initDateFields } from '../components/date-field.js';
import { initValidation } from '../components/validate.js';

export function init() {
  initFileField();
  initPhoneFields();
  initDateFields();
  initValidation();

  /*
   * The step is a static page, so a valid form has nowhere to post to: it
   * moves on by hand instead. Laravel drops this — the form posts to the
   * passengers route and the controller redirects to the next step.
   */
  const form = qs('[data-validate]');

  if (!form) return;

  on(form, 'submit', (event) => {
    if (event.defaultPrevented) return;

    event.preventDefault();
    window.location.assign(form.getAttribute('action'));
  });
}
