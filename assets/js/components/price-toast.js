/**
 * Price change notice.
 *
 * A search and an offer are only good for so long. When that window runs out
 * the prices on the page can no longer be trusted, so this says so before the
 * traveller carries a stale figure into the next step.
 *
 * Nothing here knows what the new price is, and nothing here decides one: the
 * notice only points at a fresh request, and the backend prices it again. The
 * wait comes off `data-price-toast-delay`, which the backend renders from the
 * hold it actually gave.
 *
 * It is a <dialog>, so the dim and blur behind it, the focus staying inside it
 * and Escape closing it are all the browser's. With this module absent the
 * dialog simply never opens and the page keeps the prices it was rendered
 * with, which the backend re-checks on submit either way.
 */

import { qs, on } from '../core/dom.js';

export function initPriceToast(scope = document) {
  const toast = qs('[data-price-toast]', scope);

  if (!toast || typeof toast.showModal !== 'function') return;

  const delay = Number(toast.dataset.priceToastDelay ?? 30000);

  /* Already open because the backend knew the price had moved: leave it. */
  const timer = toast.open
    ? null
    : window.setTimeout(() => toast.showModal(), delay);

  const close = qs('[data-toast-close]', toast);

  if (close) {
    on(close, 'click', () => {
      if (timer !== null) window.clearTimeout(timer);
      toast.close();
    });
  }
}
