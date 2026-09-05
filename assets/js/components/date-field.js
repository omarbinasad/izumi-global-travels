/**
 * Single date field.
 *
 * The native <input type="date"> stays where it is and remains the only value
 * store: this module reads and writes it and fires `change`, so anything else
 * listening keeps working. Without JavaScript the field is an untouched native
 * date input and the platform's own picker still opens — nothing here is
 * load-bearing.
 *
 * It is the sibling of date-range.js, which does the same job for the two
 * search fields, and it borrows that picker's stylesheet. The only rules it
 * applies are the input's own min and max; everything else is the backend's.
 */

import { qs, qsa, on } from '../core/dom.js';

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/* Local-time helpers. Date("2026-09-18") parses as UTC and can land on the day
   before, so every conversion here goes through the parts. */
function toISO(date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function fromISO(iso) {
  if (!iso) return null;

  const [year, month, day] = iso.split('-').map(Number);

  return year && month && day ? new Date(year, month - 1, day) : null;
}

function addMonths(date, count) {
  return new Date(date.getFullYear(), date.getMonth() + count, 1);
}

/* Monday-first, which is what the weekday header above the grid says. */
function weekdayIndex(date) {
  return (date.getDay() + 6) % 7;
}

export function initDateFields(root = document) {
  qsa('[data-date-field]', root).forEach((field) => {
    const input = qs('input[type="date"]', field);
    const trigger = qs('[data-date-open]', field);

    if (!input || !trigger) return;

    const min = input.min || '';
    const max = input.max || '';

    const panel = document.createElement('div');
    panel.className = 'daterange daterange--single';
    panel.hidden = true;
    panel.innerHTML = `
      <div class="daterange__head">
        <button class="daterange__nav" type="button" data-date-prev aria-label="Previous month">
          <svg class="icon size-4" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
        </button>
        <p class="daterange__title" aria-live="polite" data-date-title></p>
        <button class="daterange__nav" type="button" data-date-next aria-label="Next month">
          <svg class="icon size-4" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
        </button>
      </div>
      <div class="daterange__months" data-date-months></div>
    `;
    field.append(panel);

    const months = qs('[data-date-months]', panel);
    const title = qs('[data-date-title]', panel);

    /* The month on show. It follows the chosen date, or opens on today. */
    let view = fromISO(input.value) ?? fromISO(min) ?? new Date();
    view = new Date(view.getFullYear(), view.getMonth(), 1);

    function render() {
      const table = document.createElement('table');
      table.className = 'daterange__month';
      table.setAttribute('role', 'grid');
      table.setAttribute('aria-label', `${MONTHS[view.getMonth()]} ${view.getFullYear()}`);

      const head = WEEKDAYS.map((day) => `<th scope="col" abbr="${day}">${day}</th>`).join('');
      const cells = [];

      /* Blank cells up to the first of the month, then one per day. */
      for (let i = 0; i < weekdayIndex(view); i += 1) cells.push(null);

      const days = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
      for (let day = 1; day <= days; day += 1) {
        cells.push(new Date(view.getFullYear(), view.getMonth(), day));
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
          const disabled = (min && iso < min) || (max && iso > max);
          const chosen = iso === input.value;

          body += `<td>
            <button class="daterange__day" type="button"
                    data-date-day="${iso}"
                    ${chosen ? 'data-date-state="start end"' : ''}
                    ${disabled ? 'disabled' : ''}
                    aria-pressed="${chosen}"
                    aria-label="${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}">
              ${date.getDate()}
            </button>
          </td>`;
        }

        body += '</tr>';
      }

      table.innerHTML = `<thead><tr>${head}</tr></thead><tbody>${body}</tbody>`;
      months.replaceChildren(table);
      title.textContent = `${MONTHS[view.getMonth()]} ${view.getFullYear()}`;
    }

    /* The form sits low on the page, so a panel dropped below it can run off
       the screen. Presentation only. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = panel.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      panel.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function open() {
      if (!panel.hidden) return;

      view = fromISO(input.value) ?? view;
      view = new Date(view.getFullYear(), view.getMonth(), 1);

      render();
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      place();
    }

    function close() {
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    on(trigger, 'click', () => (panel.hidden ? open() : close()));

    on(panel, 'click', (event) => {
      const step = event.target.closest('[data-date-prev]') ? -1
        : event.target.closest('[data-date-next]') ? 1 : 0;

      if (step !== 0) {
        view = addMonths(view, step);
        render();
        return;
      }

      const day = event.target.closest('[data-date-day]');

      if (!day) return;

      input.value = day.dataset.dateDay;
      /* Everything else listens to the input, not to this module. */
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));

      close();
      trigger.focus();
    });

    on(field, 'keydown', (event) => {
      if (event.key !== 'Escape' || panel.hidden) return;

      event.stopPropagation();
      close();
      trigger.focus();
    });

    on(document, 'pointerdown', (event) => {
      if (!panel.hidden && !field.contains(event.target)) close();
    });

    /* Tells the stylesheet to drop the platform's own calendar button, now
       that there is one of ours to press. */
    field.dataset.datePicker = 'custom';
  });
}
