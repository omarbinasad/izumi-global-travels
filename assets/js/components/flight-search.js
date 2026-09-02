/**
 * Flight-search panel behaviour.
 *
 * Display logic only — which product tab is showing, whether the return date
 * applies, and swapping the two airports. Availability, pricing and validation
 * are the backend's job; see docs/laravel-handoff.md.
 */

import { qs, qsa, on } from '../core/dom.js';
import { initDateRange } from './date-range.js';
import { initSteppers } from './stepper.js';
import { initAirportFields } from './airport-field.js';

/** Product tabs: Flights / eSIM / Flight status. */
function initTabs(root) {
  const tabs = qsa('[data-search-tab]', root);

  if (tabs.length === 0) return;

  const list = tabs[0].closest('[role="tablist"]');

  /*
   * The pill is drawn by the stylesheet; the two values below are the only
   * things that can only be known at runtime, which is why they are set here
   * as custom properties rather than as styles.
   */
  function slide(target) {
    if (!list) return;

    list.style.setProperty('--tab-x', `${target.offsetLeft}px`);
    list.style.setProperty('--tab-w', `${target.offsetWidth}px`);
    /* Added last, so the pill appears already in position instead of sliding
       in from the start of the row on the first paint. */
    list.dataset.slider = 'true';
  }

  function select(target) {
    tabs.forEach((tab) => {
      const isSelected = tab === target;
      const panel = qs(`#${tab.getAttribute('aria-controls')}`, root);

      tab.setAttribute('aria-selected', String(isSelected));
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');

      if (panel) panel.hidden = !isSelected;
    });

    slide(target);
  }

  /* Label widths change with the viewport, so the pill is measured again. */
  on(window, 'resize', () => {
    const current = tabs.find((tab) => tab.getAttribute('aria-selected') === 'true');
    if (current) slide(current);
  });

  /* Set the initial roving tabindex: only the selected tab is a tab stop. */
  select(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0]);

  tabs.forEach((tab, index) => {
    on(tab, 'click', () => select(tab));

    /* Arrow keys move between tabs, as the tablist pattern expects. */
    on(tab, 'keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

      if (step === 0) return;

      event.preventDefault();
      const next = tabs[(index + step + tabs.length) % tabs.length];
      select(next);
      next.focus();
    });
  });
}

/**
 * Round trip shows the return date; one way does not. The field is disabled
 * rather than removed so the layout does not jump.
 */
function initTripType(root) {
  const inputs = qsa('[data-trip-type]', root);
  const returnField = qs('[data-return-field]', root);

  if (inputs.length === 0 || !returnField) return;

  const control = qs('input, select', returnField);

  function apply() {
    const selected = inputs.find((input) => input.checked);
    const isRoundTrip = selected?.value === 'round_trip';

    returnField.dataset.disabled = String(!isRoundTrip);
    if (control) {
      control.disabled = !isRoundTrip;
      control.required = isRoundTrip;
    }
  }

  inputs.forEach((input) => on(input, 'change', apply));
  apply();
}

/**
 * Swaps origin and destination. The visible name, the IATA code, the airport
 * sub-line and the hidden value that actually submits all move together.
 */
function initSwap(root) {
  const button = qs('[data-swap-airports]', root);
  const fields = qsa('[data-airport-field]', root);

  if (!button || fields.length !== 2) return;

  function parts(field) {
    return {
      input: qs('[data-airport]', field),
      code: qs('[data-airport-code]', field),
      sub: qs('[data-airport-sub]', field),
      value: qs('[data-airport-value]', field),
    };
  }

  on(button, 'click', () => {
    const [from, to] = fields.map(parts);

    [
      [from.input, to.input, 'value'],
      [from.value, to.value, 'value'],
      [from.code, to.code, 'textContent'],
      [from.sub, to.sub, 'textContent'],
    ].forEach(([a, b, key]) => {
      if (!a || !b) return;
      const held = a[key];
      a[key] = b[key];
      b[key] = held;
    });

    button.dataset.flipped = button.dataset.flipped === 'true' ? 'false' : 'true';
    from.input?.focus();
  });
}

/**
 * Keeps the travellers summary in step with the counts and cabin inside the
 * pop-out, and closes it on an outside click or Escape. The <details> element
 * still opens and the form still submits with JavaScript off.
 */
function initPax(root) {
  const pax = qs('[data-pax]', root);

  if (!pax) return;

  const summary = qs('[data-pax-summary]', pax);
  const cabinLabel = qs('[data-pax-cabin]', pax);
  const counts = qsa('[data-pax-count]', pax);
  const cabins = qsa('[data-pax-cabin-input]', pax);

  function update() {
    if (summary) {
      const total = counts.reduce((sum, input) => sum + (Number(input.value) || 0), 0);
      summary.textContent = total + (total === 1 ? ' traveller' : ' travellers');
    }

    if (cabinLabel) {
      const checked = cabins.find((input) => input.checked);
      cabinLabel.textContent = checked ? qs('span', checked.parentElement).textContent : '';
    }
  }

  [...counts, ...cabins].forEach((input) => {
    on(input, 'change', update);
    on(input, 'input', update);
  });

  update();

  /*
   * The search panel sits at the foot of the hero, so a pop-out dropped below
   * it runs off the screen. Presentation only: with no JavaScript the panel
   * still opens, downwards.
   */
  const panel = qs('[data-pax-panel]', pax);

  on(pax, 'toggle', () => {
    if (!pax.open || !panel) return;
    const field = pax.getBoundingClientRect();
    const height = panel.getBoundingClientRect().height;
    const below = window.innerHeight - field.bottom;
    /* Above only when it will not fit below and there is more room up there. */
    panel.dataset.drop = (height + 16 > below && field.top > below) ? 'up' : 'down';
  });

  on(document, 'click', (event) => {
    if (pax.open && !pax.contains(event.target)) pax.open = false;
  });

  on(pax, 'keydown', (event) => {
    if (event.key !== 'Escape' || !pax.open) return;
    pax.open = false;
    qs('summary', pax)?.focus();
  });
}

/**
 * Keeps the "18 Sep" label over each date input in step with its value.
 * The label is decorative — the input still carries the real value and is
 * what a screen reader announces — so it is aria-hidden in the markup.
 */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function initDateDisplays(root) {
  const inputs = qsa('[data-date-input]', root);

  if (inputs.length === 0) return;

  inputs.forEach((input) => {
    const display = qs('[data-date-display]', input.parentElement);

    if (!display) return;

    function update() {
      if (!input.value) {
        display.textContent = '';
        return;
      }

      /*
       * Formatted by hand rather than with Intl: Intl's "short" month is
       * ICU-version dependent and renders September as "Sept" in en-GB, while
       * the design calls for "18 Sep". Parsing the parts also avoids the
       * timezone shift that Date("2026-09-18") would introduce.
       * When localisation lands this display string should come from the
       * backend, like every other formatted value.
       */
      const [, month, day] = input.value.split('-').map(Number);
      display.textContent = Number(day) + ' ' + MONTHS[month - 1];
    }

    on(input, 'change', update);
    on(input, 'input', update);
    update();
  });
}

export function initFlightSearch(scope = document) {
  const root = qs('[data-flight-search]', scope);

  if (!root) return;

  initTabs(root);
  initTripType(root);
  initSwap(root);
  initPax(root);
  initSteppers(root);
  initAirportFields(root);
  initDateDisplays(root);
  initDateRange(root);
}
