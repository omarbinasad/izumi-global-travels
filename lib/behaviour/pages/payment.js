/**
 * Payment step. Loaded by registry.js because <body data-page="payment">.
 *
 * NO PAYMENT HAPPENS HERE, and none can. In the built site the form posts to
 * the backend, which creates the payment with the gateway and decides where
 * the traveller goes next; the card itself is typed into Stripe's own iframe
 * and never reaches this document.
 *
 * This file exists only so the static build can be walked end to end: it stops
 * the submit and moves to the page the form already names. Nothing is charged,
 * nothing is validated as though it were, and the moment there is a backend
 * this handler goes.
 *
 * Which method is chosen needs nothing running — the card fields follow the
 * checked radio in CSS.
 */

import { qs, on } from '../core/dom.js';
import { navigate } from '../core/navigate.js';

export function init() {
  const form = qs('[data-payment-form]');

  if (!form) return;

  on(form, 'submit', (event) => {
    if (event.defaultPrevented) return;

    event.preventDefault();
    navigate(form.getAttribute('action'));
  });
}
