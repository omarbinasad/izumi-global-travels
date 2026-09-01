/**
 * Sort tabs on the search results page.
 *
 * In Laravel this is a round trip: the tab carries a `sort` parameter and the
 * backend returns the ordered set, because only it knows the full result list.
 * Here the whole set is already on the page, so the tabs reorder what is
 * rendered — using the price and duration the backend put on each card, never
 * anything parsed out of the visible labels.
 *
 * Nothing is priced or recalculated. The values below are read-only.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Each tab id maps to how the cards are ordered under it. "Recommended" is the
   backend's own ranking, so it is simply the order the cards arrived in. */
const ORDERS = {
  'sort-cheapest': (card) => Number(card.dataset.sortPrice),
  'sort-fastest': (card) => Number(card.dataset.sortDuration),
};

export function initSortTabs(scope = document) {
  const tabs = qsa('[data-sort-tab]', scope);
  const list = qs('#results-list', scope);

  if (tabs.length === 0 || !list) return;

  /* The order the server sent, kept so "Recommended" can be restored. */
  const ranked = [...list.children];

  function select(tab) {
    tabs.forEach((other) => other.setAttribute('aria-selected', String(other === tab)));
    list.setAttribute('aria-labelledby', tab.id);

    const key = ORDERS[tab.id];
    const order = key
      ? [...ranked].sort((a, b) => key(a) - key(b))
      : ranked;

    /* Appending a node that is already in the list moves it, so this reorders
       in place without destroying anything or losing focus. */
    order.forEach((card) => list.append(card));
  }

  tabs.forEach((tab, index) => {
    on(tab, 'click', () => select(tab));

    /* A tablist is expected to move between its tabs with the arrow keys. */
    on(tab, 'keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

      if (step === 0) return;

      event.preventDefault();

      const next = tabs[(index + step + tabs.length) % tabs.length];
      next.focus();
      select(next);
    });
  });
}
