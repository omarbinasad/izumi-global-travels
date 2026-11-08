/**
 * Modify search.
 *
 * The link gets you there on its own: it is an in-page anchor to the search
 * bar, and the stylesheet smooth-scrolls it. What a link cannot do is open the
 * form once it arrives, so that is all this adds — with the module absent the
 * page still scrolls to the bar, and the bar still opens on a tap.
 */

import { qs, on } from '../core/dom.js';

export function initModifySearch(scope = document) {
  const link = qs('[data-modify-search]', scope);
  const search = qs('[data-summary-edit]', scope);

  if (!link || !search) return;

  /* Before the browser follows the link: the bar's top does not move when the
     panel unfolds beneath it, so the scroll still lands where it should. */
  on(link, 'click', () => {
    search.open = true;
  });
}
