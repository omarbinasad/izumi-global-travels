/**
 * Sort tabs on the search results page.
 *
 * In Laravel this is a round trip: the tab carries a `sort` parameter and the
 * backend returns the ordered set, because only it knows the full result list.
 * Here the whole set is already on the page, so the tabs reorder what is
 * rendered — using the price and duration the backend put on each card, never
 * anything parsed out of the visible labels.
 *
 * The badge follows the sort: whichever offer leads the list under a tab is
 * the one that tab is describing, so it wears that tab's badge and no other
 * card carries one. Nothing is priced or recalculated here.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Each tab id maps to how the cards are ordered under it and what the leading
   card is then called. "Recommended" is the backend's own ranking, so it has
   no key: the cards are simply left in the order they arrived. */
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

    /* One badge across the whole list, on whichever offer now leads it. */
    qsa('[data-result-badge]', list).forEach((badge) => { badge.hidden = true; });

    const leading = qs('[data-result-badge]', order[0]);

    if (leading) {
      leading.textContent = tab.label;
      leading.dataset.kind = tab.badge;
      leading.hidden = false;
    }
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
