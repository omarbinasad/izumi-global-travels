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

export function init() {
  initPhoneFields();
  initSelectFields();
  initDateFields();
  initDigitsOnly();
  initConfirmFields();
  initValidation();
  initCopyText();
}
