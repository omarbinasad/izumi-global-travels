/**
 * Saved flights and hotels: removing one.
 *
 * Each card's Remove is a real form, so with this module absent it posts to
 * the backend, which forgets the item and renders the page again. Here the
 * static page has nowhere to post to, so the card is taken out in place: it
 * fades, leaves the list, the count on its tab drops, and the list's empty
 * state shows once nothing is left. Nothing is stored — reload and it is back.
 *
 * A notice offers Undo for a few seconds, because a remove is one click and
 * easy to make by mistake. Undo puts the same card back where it was. In
 * Laravel the remove is a DELETE and the undo saves the item again.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Long enough to read the line and reach the button, short enough not to
   linger over the page. */
const UNDO_FOR = 6000;

export function initSavedList(scope = document) {
  const lists = qsa('[data-saved-list]', scope);

  if (lists.length === 0) return;

  const notice = qs('[data-saved-notice]', scope);
  const noticeText = notice && qs('[data-saved-notice-text]', notice);
  const undo = notice && qs('[data-saved-undo]', notice);

  /* Only the latest remove can be undone. */
  let last = null;
  let timer = 0;

  function refresh(list) {
    const kind = list.dataset.savedList;
    const count = qsa('[data-saved-item]', list).length;

    qsa(`[data-saved-count="${kind}"]`, scope).forEach((badge) => {
      badge.textContent = String(count);
    });

    const empty = qs(`[data-saved-empty="${kind}"]`, scope);

    if (empty) empty.hidden = count > 0;
    list.hidden = count === 0;
  }

  function hideNotice() {
    window.clearTimeout(timer);
    if (notice) notice.hidden = true;
  }

  function showNotice(name) {
    if (!notice) return;

    /* Shown first, then filled: a live region announces a change to text it
       already holds more reliably than text that arrives with it. */
    notice.hidden = false;
    noticeText.textContent = `Removed ${name} from saved.`;
    window.clearTimeout(timer);
    timer = window.setTimeout(hideNotice, UNDO_FOR);
  }

  function remove(item, list) {
    /* Where focus goes once the card is gone: the next card's remove, or the
       previous one's, or the empty state's way on. */
    const neighbour = item.nextElementSibling ?? item.previousElementSibling;
    const next = item.nextSibling;

    item.dataset.state = 'leaving';

    let done = false;

    function finish() {
      if (done) return;
      done = true;

      item.remove();
      delete item.dataset.state;
      last = { item, list, next };

      refresh(list);
      showNotice(item.dataset.savedName ?? 'Item');

      const target = neighbour?.isConnected
        ? qs('[data-saved-remove] button', neighbour)
        : qs(`[data-saved-empty="${list.dataset.savedList}"] a`, scope);

      target?.focus();
    }

    on(item, 'animationend', finish, { once: true });
    /* If the animation never runs — no support, or it was flattened — the
       card still goes. */
    window.setTimeout(finish, 400);
  }

  lists.forEach((list) => {
    on(list, 'submit', (event) => {
      const form = event.target.closest('[data-saved-remove]');

      if (!form) return;

      event.preventDefault();

      const item = form.closest('[data-saved-item]');

      if (item && item.dataset.state !== 'leaving') remove(item, list);
    });

    refresh(list);
  });

  if (undo) {
    on(undo, 'click', () => {
      if (!last) return;

      const { item, list, next } = last;

      last = null;
      list.insertBefore(item, next?.parentNode === list ? next : null);
      refresh(list);
      hideNotice();
      qs('[data-saved-remove] button', item)?.focus();
    });
  }
}
