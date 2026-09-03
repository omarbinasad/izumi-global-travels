/**
 * Sort tabs on the search results page.
 *
 * In Laravel this is a round trip: the tab carries a `sort` parameter and the
 * backend returns the ordered set, because only it knows the full result list.
 * Here the whole set is already on the page, so the tabs reorder what is
 * rendered — using the price and duration the backend put on each card, never
 * anything parsed out of the visible labels.
 *
 * The badge follows the sort: every card in the list is part of the set the
 * chosen tab describes, so they all carry that tab's badge. Nothing is priced
 * or recalculated here.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Each tab id maps to how the cards are ordered under it and what the set is
   then called. "Recommended" is the backend's own ranking, so it has no key:
   the cards are simply left in the order they arrived. */
const TABS = {
  'sort-recommended': { badge: 'recommended', label: 'Recommended' },
  'sort-cheapest': { badge: 'cheapest', label: 'Cheapest', round: 'sortPrice', one: 'sortPriceOne' },
  'sort-fastest': { badge: 'fastest', label: 'Fastest', round: 'sortDuration', one: 'sortDurationOne' },
};

export function initSortTabs(scope = document) {
  const tabs = qsa('[data-sort-tab]', scope);
  const list = qs('#results-list', scope);

  if (tabs.length === 0 || !list) return;

  /* The order the server sent, kept so "Recommended" can be restored. */
  const ranked = [...list.children];

  /* A one-way search is a different set of figures, not a different sort. */
  const oneWay = () => document.body.dataset.tripView === 'one_way';

  function value(card, tab) {
    return Number(card.dataset[oneWay() ? tab.one : tab.round]);
  }

  function select(button) {
    const tab = TABS[button.id];

    if (!tab) return;

    tabs.forEach((other) => other.setAttribute('aria-selected', String(other === button)));
    list.setAttribute('aria-labelledby', button.id);

    const order = tab.round
      ? [...ranked].sort((a, b) => value(a, tab) - value(b, tab))
      : ranked;

    /* Appending a node that is already in the list moves it, so this reorders
       in place without destroying anything or losing focus. */
    order.forEach((card) => list.append(card));

    /* The list is the answer to the tab, so every card in it is labelled with
       that tab rather than only the one at the top. */
    qsa('[data-result-badge]', list).forEach((badge) => {
      badge.textContent = tab.label;
      badge.dataset.kind = tab.badge;
      badge.hidden = false;
    });
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
