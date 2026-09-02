/**
 * Add-ons step.
 *
 * One panel of choices per traveller, and a tab per traveller above them. The
 * panels are all in the markup, so with this module absent every traveller's
 * choices are simply present one after another and the form still submits.
 *
 * The summary on each tab is a readback of that traveller's own radios. No
 * price is read, added or shown here: the backend prices the selection when
 * the step is submitted.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Short forms for the tab line, keyed by the add-on id the option submits. */
const SHORT = {
  add_seat_window: 'Window',
  add_seat_aisle: 'Aisle',
  add_seat_any: 'No preference',
  add_meal_regular: 'Regular',
  add_meal_halal: 'Halal',
  add_meal_vegetarian: 'Vegetarian',
  add_meal_none: 'No meal',
  add_ins_none: 'No insurance',
  add_ins_standard: 'Standard',
  add_ins_premium: 'Premium',
};

export function initAddOns(scope = document) {
  const tabs = qsa('[data-add-ons-tab]', scope);
  const panels = qsa('[data-add-ons-panel]', scope);

  if (tabs.length === 0 || tabs.length !== panels.length) return;

  /* Seat, meal, cover — the outbound seat stands for both directions, which
     is what the line has room for. */
  function summarise(panel) {
    const parts = ['seat_out', 'meal', 'insurance'].map((kind) => {
      const chosen = qsa(`[data-add-on="${kind}"]`, panel).find((input) => input.checked);
      return chosen ? SHORT[chosen.value] ?? chosen.value : null;
    });

    return parts.filter(Boolean).join(' · ');
  }

  function refresh(index) {
    const line = qs('[data-pax-tab-summary]', tabs[index]);

    if (line) line.textContent = summarise(panels[index]);
  }

  function select(index) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.setAttribute('tabindex', i === index ? '0' : '-1');
      panels[i].hidden = i !== index;
    });
  }

  tabs.forEach((tab, index) => {
    on(tab, 'click', () => select(index));

    /* A tablist is expected to move between its tabs with the arrow keys. */
    on(tab, 'keydown', (event) => {
      const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;

      if (step === 0) return;

      event.preventDefault();

      const next = (index + step + tabs.length) % tabs.length;
      select(next);
      tabs[next].focus();
    });

    qsa('[data-add-on]', panels[index]).forEach((input) => {
      on(input, 'change', () => refresh(index));
    });

    refresh(index);
  });
}
