/**
 * Account pages. Loaded by main.js because <body data-page="account-*">.
 * It only wires up components; behaviour lives with each component.
 */

import { initPhoneFields } from '../components/phone-field.js';
import { initSelectFields } from '../components/select-field.js';
import { initDateFields } from '../components/date-field.js';
import { initDigitsOnly } from '../components/digits.js';
import { initConfirmFields } from '../components/confirm-field.js';
import { initValidation } from '../components/validate.js';
import { initCopyText } from '../components/copy-text.js';
import { initDialogs } from '../components/dialog.js';
import { initSavedList } from '../components/saved-list.js';
import { initDateRange } from '../components/date-range.js';
/* The formatted label over a search date field, the same one the search
   panels put over their own. */
import { initDateDisplays } from '../components/flight-search.js';
import { qs, qsa, on } from '../core/dom.js';

export function init() {
  initPhoneFields();
  initSelectFields();
  initDateFields();
  initDigitsOnly();
  initConfirmFields();
  initValidation();
  initCopyText();
  initDialogs();
  initSavedList();
  /* The new dates in the date-change dialog use the themed calendar the
     search forms open, not the platform's own. */
  initDateDisplays();
  initDateRange();

  /*
   * A cancellation or date-change request has nowhere to post to on a static
   * page, so one that passes its own checks turns the dialog over to the
   * "request sent" panel already in it. Nothing is cancelled or changed by
   * this. Laravel drops it — the form posts to the booking's request route and
   * the team acts on it. Registered after initValidation, so an invalid form
   * has already been stopped by the time this runs.
   */
  qsa('[data-request-form]').forEach((form) => {
    const dialog = form.closest('dialog');
    const sent = qs(`#${form.dataset.sentPanel}`);

    if (!sent) return;

    on(form, 'submit', (event) => {
      if (event.defaultPrevented) return;

      event.preventDefault();
      form.hidden = true;
      sent.hidden = false;
      sent.focus();
    });

    /* Opened again, the dialog starts from the form rather than the receipt. */
    if (dialog) {
      on(dialog, 'close', () => {
        form.hidden = false;
        sent.hidden = true;
      });
    }
  });
}
