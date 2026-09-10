/**
 * Fare family choice, read back into the price summary.
 *
 * The cards are radios and the summary rows are the backend's figures: each
 * row carries `data-amount`, each radio the difference per traveller for that
 * fare. Choosing one adds that difference across the party and rewrites the
 * total — a readback of numbers already on the page, not a price worked out
 * here. The booking is priced again server-side when the step is submitted.
 *
 * With this module absent the markup still shows the fare that is selected and
 * the total that goes with it, because the backend rendered both.
 */

import { qs, qsa, on } from '../core/dom.js';
import { money } from '../core/format.js';

export function initFareFamily(scope = document) {
  const summary = qs('[data-price-summary]', scope);
  const fares = qsa('[data-fare-delta]', scope);

  if (!summary || fares.length === 0) return;

  const currency = summary.dataset.currency ?? '';
  const travellers = Number(summary.dataset.travellers ?? 1);

  const row = qs('[data-fare-upgrade-row]', summary);
  const label = qs('[data-fare-upgrade-label]', summary);
  const cell = qs('[data-fare-upgrade]', summary);
  const total = qs('[data-grand-total]', summary);

  /* The priced rows never move; only the fare on top of them does. */
  const base = qsa('[data-amount]', summary)
    .reduce((sum, amount) => sum + Number(amount.dataset.amount), 0);

  function apply() {
    const picked = fares.find((fare) => fare.checked) ?? fares[0];
    const upgrade = Number(picked.dataset.fareDelta ?? 0) * travellers;

    /* Nothing to show when the cheapest fare is the one chosen. */
    if (row) row.hidden = upgrade === 0;
    if (label) label.textContent = `${picked.dataset.fareName} × ${travellers}`;
    if (cell) cell.textContent = money(currency, upgrade);
    if (total) total.textContent = money(currency, base + upgrade);
  }

  fares.forEach((fare) => on(fare, 'change', apply));

  apply();
}
