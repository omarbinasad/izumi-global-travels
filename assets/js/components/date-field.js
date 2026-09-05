/**
 * Single date field, entered as year, then month, then day.
 *
 * A calendar grid is the wrong shape for a date of birth or a passport expiry:
 * both are years away from the month a calendar opens on. Three dropdowns get
 * there in three taps, and each one opens the next as soon as it is answered.
 *
 * The native <input type="date"> stays where it is and remains the only value
 * store: this module reads and writes it and fires `change`, so validation and
 * anything else listening keep working. Without JavaScript the field is an
 * untouched native date input and the platform's own picker still opens —
 * nothing here is load-bearing.
 *
 * The selectable range is the input's own `min` and `max`, which the backend
 * renders. Two shorthands are read off the input and turned into that range,
 * because a static page cannot render a date relative to today:
 *
 *   data-min-age="12"   the traveller is at least 12  -> max = today - 12y
 *   data-max-age="2"    the traveller is under 2      -> min = today - 2y + 1d
 *   data-min-days="1"   not before tomorrow           -> min = today + 1d
 *
 * That is how the passenger type reaches the picker: Blade renders ADT, CHD or
 * INF as the ages that type allows. It is a convenience for the traveller, not
 * a rule — the age policy and the expiry check are the backend's, and the form
 * request checks both again.
 */

import { qs, qsa, on } from '../core/dom.js';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const PARTS = ['year', 'month', 'day'];
const TITLES = { year: 'Year', month: 'Month', day: 'Day' };

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

function shiftYears(date, years) {
  return new Date(date.getFullYear() - years, date.getMonth(), date.getDate());
}

function shiftDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/* The widest range the parts may offer, once the shorthands are resolved. */
function bounds(input) {
  const today = new Date();
  const minAge = Number(input.dataset.minAge);
  const maxAge = Number(input.dataset.maxAge);
  const minDays = Number(input.dataset.minDays);

  let min = input.min || '';
  let max = input.max || '';

  if (minAge > 0) max = toISO(shiftYears(today, minAge));
  /* One day inside the birthday, so someone who turns that age today is out. */
  if (maxAge > 0) min = toISO(shiftDays(shiftYears(today, maxAge), 1));
  if (minDays > 0) min = toISO(shiftDays(today, minDays));

  return { min, max };
}

export function initDateFields(root = document) {
  qsa('[data-date-field]', root).forEach((field) => {
    const input = qs('input[type="date"]', field);

    if (!input) return;

    const { min, max } = bounds(input);

    /* The native input enforces the same range, so a browser that skips this
       module still refuses a date outside it. */
    if (min) input.min = min;
    if (max) input.max = max;

    /* An unbounded end still needs a first and a last year to list. A century
       back and two decades on covers a birth date and a passport expiry; a
       field that means something narrower says so in min and max. */
    const first = fromISO(min) ?? new Date(new Date().getFullYear() - 120, 0, 1);
    const last = fromISO(max) ?? new Date(new Date().getFullYear() + 20, 11, 31);
    const label = input.id ? qs(`label[for="${input.id}"]`) : null;

    const group = document.createElement('div');
    group.className = 'dob';
    group.setAttribute('role', 'group');
    if (label) group.setAttribute('aria-label', label.textContent.trim());
    group.innerHTML = PARTS.map((part) => `
      <button class="dob__part" type="button" data-dob-part="${part}"
              aria-haspopup="listbox" aria-expanded="false">
        <span class="dob__value" data-dob-value>${TITLES[part]}</span>
        <svg class="icon size-4 dob__chevron" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
      </button>`).join('');

    const panel = document.createElement('div');
    panel.className = 'dob__panel';
    panel.hidden = true;
    panel.innerHTML = `
      <p class="dob__panel-title" data-dob-title></p>
      <ul class="dob__options" data-dob-options></ul>
    `;

    field.append(group, panel);

    const title = qs('[data-dob-title]', panel);
    const list = qs('[data-dob-options]', panel);
    const triggers = {};
    PARTS.forEach((part) => { triggers[part] = qs(`[data-dob-part="${part}"]`, group); });

    /* What has been answered so far. A part is null until it is chosen. */
    const chosen = fromISO(input.value);
    const state = chosen
      ? { year: chosen.getFullYear(), month: chosen.getMonth(), day: chosen.getDate() }
      : { year: null, month: null, day: null };

    let open = null;

    /* --- what each part may offer, given the parts already answered ------- */

    /* A date behind us reads best with the newest year first — a birth date is
       far more likely to be recent than a century old. A date ahead of us reads
       the other way round, nearest first. */
    const newestFirst = first <= new Date();

    function years() {
      const out = [];

      for (let year = first.getFullYear(); year <= last.getFullYear(); year += 1) out.push(year);

      return newestFirst ? out.reverse() : out;
    }

    function months() {
      const year = state.year;

      return MONTHS.map((name, index) => ({ name, index })).filter(({ index }) => {
        if (year === null) return true;
        /* A month is on offer if any day in it falls inside the range. */
        const start = new Date(year, index, 1);
        const end = new Date(year, index, daysInMonth(year, index));

        return end >= first && start <= last;
      });
    }

    function days() {
      const { year, month } = state;
      const total = year !== null && month !== null ? daysInMonth(year, month) : 31;
      const out = [];

      for (let day = 1; day <= total; day += 1) {
        if (year === null || month === null) { out.push(day); continue; }

        const date = new Date(year, month, day);

        if (date >= first && date <= last) out.push(day);
      }

      return out;
    }

    function optionsFor(part) {
      if (part === 'year') return years().map((year) => ({ value: year, text: String(year) }));
      if (part === 'month') return months().map((m) => ({ value: m.index, text: m.name }));

      return days().map((day) => ({ value: day, text: String(day).padStart(2, '0') }));
    }

    /* --- drawing ---------------------------------------------------------- */

    function labelFor(part) {
      if (state[part] === null) return TITLES[part];
      if (part === 'year') return String(state.year);
      if (part === 'month') return MONTHS[state.month].slice(0, 3);

      return String(state.day).padStart(2, '0');
    }

    function paint() {
      PARTS.forEach((part) => {
        const trigger = triggers[part];

        qs('[data-dob-value]', trigger).textContent = labelFor(part);
        trigger.dataset.dobFilled = String(state[part] !== null);
      });
    }

    /* The input only carries a date once all three parts are answered; a half
       finished date is no date at all, and `required` should still catch it. */
    function commit() {
      const { year, month, day } = state;
      const value = year !== null && month !== null && day !== null
        ? toISO(new Date(year, month, day))
        : '';

      if (value === input.value) return;

      input.value = value;
      /* Everything else listens to the input, not to this module. */
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    /* The panel drops below the field unless there is more room above it. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = panel.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      panel.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function closePanel() {
      panel.hidden = true;
      open = null;
      PARTS.forEach((part) => triggers[part].setAttribute('aria-expanded', 'false'));
    }

    function openPanel(part) {
      const options = optionsFor(part);

      title.textContent = TITLES[part];
      list.innerHTML = options.map(({ value, text }) => `
        <li>
          <button class="dob__option" type="button" data-dob-option="${value}"
                  aria-current="${state[part] === value}">${text}</button>
        </li>`).join('');

      panel.hidden = false;
      open = part;

      PARTS.forEach((other) => {
        triggers[other].setAttribute('aria-expanded', String(other === part));
      });

      place();

      /* Open on the answer already given, not at the top of a hundred years. */
      const current = qs('[aria-current="true"]', list);

      if (current) current.scrollIntoView({ block: 'center' });

      (current ?? qs('.dob__option', list))?.focus();
    }

    function choose(part, value) {
      state[part] = value;

      /* A shorter month can leave the chosen day out of range. */
      if (part !== 'day' && state.day !== null && state.year !== null && state.month !== null
          && state.day > daysInMonth(state.year, state.month)) {
        state.day = null;
      }

      paint();
      commit();

      /* Answering one part opens the next one that is still unanswered. */
      const next = PARTS.slice(PARTS.indexOf(part) + 1).find((other) => state[other] === null);

      if (next) {
        openPanel(next);
        return;
      }

      closePanel();
      triggers[part].focus();
    }

    on(group, 'click', (event) => {
      const trigger = event.target.closest('[data-dob-part]');

      if (!trigger) return;

      const part = trigger.dataset.dobPart;

      if (open === part) closePanel();
      else openPanel(part);
    });

    on(panel, 'click', (event) => {
      const option = event.target.closest('[data-dob-option]');

      if (option && open) choose(open, Number(option.dataset.dobOption));
    });

    /* The list is long enough that the arrow keys are the way through it. */
    on(panel, 'keydown', (event) => {
      const step = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;

      if (step === 0) return;

      const options = qsa('.dob__option', list);
      const index = options.indexOf(document.activeElement);

      if (index === -1) return;

      event.preventDefault();
      options[Math.min(Math.max(index + step, 0), options.length - 1)].focus();
    });

    on(field, 'keydown', (event) => {
      if (event.key !== 'Escape' || panel.hidden) return;

      event.stopPropagation();

      const part = open;

      closePanel();
      triggers[part ?? 'year'].focus();
    });

    on(document, 'pointerdown', (event) => {
      if (!panel.hidden && !field.contains(event.target)) closePanel();
    });

    /* Validation focuses the control it marked; the control is off screen, so
       the year sitting in its place takes the focus instead. */
    on(input, 'focus', () => triggers.year.focus());

    paint();
    /* Off screen, so out of the tab order too: the three parts are the control
       now. It still validates, and validation's focus lands on the year. */
    input.tabIndex = -1;
    /* Last: the input only steps aside once there is something to replace it. */
    field.dataset.enhanced = 'true';
  });
}
