/**
 * Date range picker.
 *
 * The two native <input type="date"> fields stay exactly where they are and
 * remain the only value store: this module never holds a date of its own, it
 * reads and writes those inputs and fires `change` so everything already
 * listening (the formatted display, the trip-type toggle) keeps working.
 *
 * With no JavaScript the fields are untouched native date inputs and the
 * platform's own picker still opens, so nothing here is load-bearing.
 *
 * Nothing about availability, fares or blackout dates lives here. The only
 * rule applied is "not in the past"; everything else is the backend's.
 */

import { qs, qsa, on } from '../core/dom.js';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/* Local-time helpers. Date("2026-09-18") parses as UTC and can land on the
   day before, so every conversion here goes through the parts. */
function toISO(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function fromISO(iso) {
  if (!iso) return null;
  const [year, month, day] = iso.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date, count) {
  return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

function addDays(date, count) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + count);
}

/* Monday-first, which is what the weekday header above the grid says. */
function weekdayIndex(date) {
  return (date.getDay() + 6) % 7;
}

export function initDateRange(root = document) {
  const scope = qs('[data-date-range]', root);

  if (!scope) return;

  const startInput = qs('[data-date-input="depart"]', scope);
  const endInput = qs('[data-date-input="return"]', scope);
  const startField = startInput?.closest('.search-field');
  const endField = endInput?.closest('.search-field');

  if (!startInput || !endInput || !startField || !endField) return;

  /* Tells the stylesheet to drop the invisible native picker overlay: from
     here on the field opens this panel instead. */
  scope.dataset.datePicker = 'custom';

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const minISO = toISO(today);

  let mode = 'start';
  let view = startOfMonth(fromISO(startInput.value) ?? today);
  let focusISO = startInput.value || minISO;
  let hoverISO = null;
  let lastTrigger = null;

  /* ---- panel ---------------------------------------------------------- */

  const panel = document.createElement('div');
  panel.className = 'daterange';
  panel.hidden = true;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Choose travel dates');
  panel.innerHTML = `
    <div class="daterange__head">
      <button class="daterange__nav" type="button" data-date-prev aria-label="Previous month">
        <svg class="icon size-4" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
      </button>
      <p class="daterange__title" aria-live="polite">
        <span data-date-title-a></span><span class="daterange__title-next" data-date-title-b></span>
      </p>
      <button class="daterange__nav" type="button" data-date-next aria-label="Next month">
        <svg class="icon size-4" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
      </button>
    </div>
    <div class="daterange__months" data-date-months></div>
    <div class="daterange__foot">
      <p class="daterange__hint" data-date-hint></p>
      <button class="daterange__action" type="button" data-date-done>Done</button>
    </div>`;
  scope.appendChild(panel);

  const months = qs('[data-date-months]', panel);
  const titleA = qs('[data-date-title-a]', panel);
  const titleB = qs('[data-date-title-b]', panel);
  const hint = qs('[data-date-hint]', panel);

  /* ---- state ---------------------------------------------------------- */

  const roundTrip = () => !endInput.disabled;

  function commit(which, iso) {
    const input = which === 'start' ? startInput : endInput;
    input.value = iso;
    /* Both, because the formatted display listens for either. */
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function inRange(iso) {
    const { value: start } = startInput;
    const end = endInput.value || (mode === 'end' ? hoverISO : null);
    if (!start || !end) return false;
    return iso > start && iso < end;
  }

  /* ---- rendering ------------------------------------------------------ */

  function renderMonth(monthStart) {
    const table = document.createElement('table');
    table.className = 'daterange__month';
    table.setAttribute('role', 'grid');
    const label = `${MONTHS[monthStart.getMonth()]} ${monthStart.getFullYear()}`;
    table.setAttribute('aria-label', label);

    const head = WEEKDAYS.map((d) => `<th scope="col" abbr="${d}">${d}</th>`).join('');
    const cells = [];

    /* Blank cells up to the first of the month, then one per day. */
    for (let i = 0; i < weekdayIndex(monthStart); i += 1) cells.push(null);
    const days = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= days; day += 1) {
      cells.push(new Date(monthStart.getFullYear(), monthStart.getMonth(), day));
    }
    while (cells.length % 7 !== 0) cells.push(null);

    let body = '';
    for (let i = 0; i < cells.length; i += 7) {
      body += '<tr>';
      for (const date of cells.slice(i, i + 7)) {
        if (!date) {
          body += '<td></td>';
          continue;
        }

        const iso = toISO(date);
        const disabled = iso < minISO;
        const isStart = iso === startInput.value;
        const isEnd = iso === endInput.value;
        const state = [];

        if (isStart) state.push('start');
        if (isEnd) state.push('end');
        if (!isStart && !isEnd && inRange(iso)) state.push('between');

        body += `<td>
          <button class="daterange__day" type="button"
                  data-date-day="${iso}"
                  ${state.length ? `data-date-state="${state.join(' ')}"` : ''}
                  ${disabled ? 'disabled' : ''}
                  tabindex="${iso === focusISO ? '0' : '-1'}"
                  aria-pressed="${isStart || isEnd}"
                  aria-label="${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}">
            ${date.getDate()}
          </button>
        </td>`;
      }
      body += '</tr>';
    }

    table.innerHTML = `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>`;
    return table;
  }

  function render() {
    months.replaceChildren(renderMonth(view), renderMonth(addMonths(view, 1)));
    const next = addMonths(view, 1);
    titleA.textContent = `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;
    /* Its own element, because the second month is hidden on a narrow screen
       and the label has to drop with it. */
    titleB.textContent = ` – ${MONTHS[next.getMonth()]} ${next.getFullYear()}`;
    hint.textContent = mode === 'start'
      ? 'Choose your departure date'
      : 'Choose your return date';
    qs('[data-date-prev]', panel).disabled = toISO(view) <= toISO(startOfMonth(today));
  }

  /* ---- open and close ------------------------------------------------- */

  function open(which, trigger) {
    mode = roundTrip() ? which : 'start';
    lastTrigger = trigger;
    focusISO = (which === 'end' ? endInput.value : startInput.value) || minISO;
    view = startOfMonth(fromISO(focusISO) ?? today);
    panel.hidden = false;
    scope.dataset.datePanel = 'open';
    render();
    place();
    qs(`[data-date-day="${focusISO}"]`, panel)?.focus({ preventScroll: true });
  }

  /*
   * Below the row by default. It flips above only when the panel will not fit
   * below AND there is more room above: asking only "does it fit below?" sent
   * it off the top of the screen wherever neither side had room.
   */
  function place() {
    const row = scope.getBoundingClientRect();
    const height = panel.getBoundingClientRect().height;
    const below = window.innerHeight - row.bottom;
    panel.dataset.drop = (height + 16 > below && row.top > below) ? 'up' : 'down';
  }

  function close({ restoreFocus = true } = {}) {
    if (panel.hidden) return;
    panel.hidden = true;
    delete scope.dataset.datePanel;
    hoverISO = null;
    if (restoreFocus) lastTrigger?.focus({ preventScroll: true });
  }

  function pick(iso) {
    if (iso < minISO) return;

    if (mode === 'start' || !roundTrip()) {
      commit('start', iso);
      /* A return before the new departure is no longer a range. */
      if (endInput.value && endInput.value < iso) commit('end', '');
      if (!roundTrip()) return close();
      mode = 'end';
      hoverISO = null;
      focusISO = iso;
      render();
      qs(`[data-date-day="${iso}"]`, panel)?.focus({ preventScroll: true });
      return;
    }

    /* Picking before the departure restarts the range rather than failing. */
    if (startInput.value && iso < startInput.value) {
      commit('start', iso);
      commit('end', '');
      focusISO = iso;
      render();
      qs(`[data-date-day="${iso}"]`, panel)?.focus({ preventScroll: true });
      return;
    }

    commit('end', iso);
    close();
  }

  /* ---- wiring --------------------------------------------------------- */

  [[startField, 'start'], [endField, 'end']].forEach(([field, which]) => {
    on(field, 'pointerdown', (event) => {
      if (which === 'end' && !roundTrip()) return;
      event.preventDefault();
      const trigger = qs('[data-date-input]', field);
      if (panel.hidden || mode !== which) open(which, trigger);
      else close();
    });

    /* Keyboard users reach the native input; opening on focus keeps the two
       routes to the panel identical. */
    on(field, 'keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'ArrowDown') return;
      if (which === 'end' && !roundTrip()) return;
      event.preventDefault();
      open(which, qs('[data-date-input]', field));
    });
  });

  on(qs('[data-date-prev]', panel), 'click', () => { view = addMonths(view, -1); render(); });
  on(qs('[data-date-next]', panel), 'click', () => { view = addMonths(view, 1); render(); });
  on(qs('[data-date-done]', panel), 'click', () => close());

  on(panel, 'click', (event) => {
    const day = event.target.closest('[data-date-day]');
    if (day && !day.disabled) pick(day.dataset.dateDay);
  });

  /* Previewing the range under the pointer is what makes a range picker read
     as one control rather than two dates. */
  on(panel, 'pointerover', (event) => {
    const day = event.target.closest('[data-date-day]');
    if (!day || mode !== 'end' || !startInput.value || endInput.value) return;
    if (day.dataset.dateDay === hoverISO) return;
    hoverISO = day.dataset.dateDay;
    render();
  });

  const STEPS = {
    ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7,
  };

  on(panel, 'keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
      return;
    }

    const day = event.target.closest('[data-date-day]');
    if (!day) return;

    const current = fromISO(day.dataset.dateDay);
    let next = null;

    if (event.key in STEPS) next = addDays(current, STEPS[event.key]);
    else if (event.key === 'Home') next = addDays(current, -weekdayIndex(current));
    else if (event.key === 'End') next = addDays(current, 6 - weekdayIndex(current));
    else if (event.key === 'PageUp') next = addMonths(current, -1);
    else if (event.key === 'PageDown') next = addMonths(current, 1);
    else return;

    event.preventDefault();
    focusISO = toISO(next);

    /* Follow the cursor out of the visible pair of months. */
    const first = toISO(view);
    const last = toISO(addMonths(view, 2));
    if (focusISO < first) view = startOfMonth(next);
    else if (focusISO >= last) view = addMonths(startOfMonth(next), -1);

    render();
    qs(`[data-date-day="${focusISO}"]`, panel)?.focus({ preventScroll: true });
  });

  on(document, 'pointerdown', (event) => {
    if (panel.hidden) return;
    if (panel.contains(event.target) || startField.contains(event.target) ||
        endField.contains(event.target)) return;
    close({ restoreFocus: false });
  });

  /* Switching to one way while the panel is open leaves it asking for a
     return that no longer exists. */
  on(endInput, 'change', () => { if (!panel.hidden) render(); });
}
