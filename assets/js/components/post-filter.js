/**
 * Journal category filter.
 *
 * Every article is in the markup; these buttons only narrow what is on show,
 * so with this module absent the whole journal is simply on display and the
 * buttons are inert. The real filter is the backend's — Blade renders the list
 * for a category, and these are the same categories under another name.
 *
 * A post can sit in more than one category, so `data-post-category` holds a
 * space-separated list. The featured section carries the attribute too, which
 * is how its heading disappears along with it.
 */

import { qs, qsa, on } from '../core/dom.js';

const ALL = 'all';

export function initPostFilters(scope = document) {
  const buttons = qsa('[data-post-filter]', scope);
  const items = qsa('[data-post-category]', scope);
  const empty = qs('[data-post-empty]', scope);

  if (buttons.length === 0 || items.length === 0) return;

  function apply(slug) {
    let shown = 0;

    items.forEach((item) => {
      const hit = slug === ALL || item.dataset.postCategory.split(' ').includes(slug);

      item.hidden = !hit;
      if (hit) shown += 1;
    });

    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.postFilter === slug));
    });

    if (empty) empty.hidden = shown > 0;
  }

  buttons.forEach((button) => {
    on(button, 'click', () => apply(button.dataset.postFilter));
  });
}
