/**
 * Add-ons step.
 *
 * One panel of choices per traveller, and a tab per traveller above them. The
 * panels are all in the markup, so with this module absent every traveller's
 * choices are simply present one after another and the form still submits.
 *
 * The summary on each tab, and the itemised list in the sidebar, are readbacks
 * of the radios. Every figure comes off the option that was chosen — the
 * backend rendered `data-price` and `data-price-label` onto each one — so
 * nothing is priced here; the totals are only those figures added up, and the
 * backend prices the request again when the step is submitted. With this
 * module absent the sidebar still shows the selection the backend rendered.
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

function chosen(panel, kind) {
  return qsa(`[data-add-on="${kind}"]`, panel).find((input) => input.checked) ?? null;
}

function price(input) {
  return input ? Number(input.dataset.price ?? 0) : 0;
}

function money(currency, value) {
  return `${currency} ${value.toLocaleString('en-US')}`;
}

export function initAddOns(scope = document) {
  const tabs = qsa('[data-add-ons-tab]', scope);
  const panels = qsa('[data-add-ons-panel]', scope);

  if (tabs.length === 0 || tabs.length !== panels.length) return;

  const summary = qs('[data-addon-summary]', scope);
  const body = qs('[data-addon-summary-body]', scope);
  const currency = summary?.dataset.currency ?? '';

  /* Seat, meal, cover — the outbound seat stands for both directions, which
     is what the line has room for. */
  function summarise(panel) {
    const parts = ['seat_out', 'meal', 'insurance'].map((kind) => {
      const pick = chosen(panel, kind);
      return pick ? SHORT[pick.value] ?? pick.value : null;
    });

    return parts.filter(Boolean).join(' · ');
  }

  /*
   * One line per thing bought. Both seats are one line when they are the same
   * seat in both directions, which is the usual case and how the confirmation
   * reads it back; two different seats are two lines, each named for its leg.
   */
  function lines(panel) {
    const out = chosen(panel, 'seat_out');
    const ret = chosen(panel, 'seat_ret');
    const rows = [];

    if (out && ret && out.value === ret.value) {
      const total = price(out) + price(ret);

      rows.push([`${out.dataset.label} × 2`, total > 0 ? money(currency, total) : out.dataset.priceLabel]);
    } else {
      if (out) rows.push([`${out.dataset.label} · Departure`, out.dataset.priceLabel]);
      if (ret) rows.push([`${ret.dataset.label} · Return`, ret.dataset.priceLabel]);
    }

    ['meal', 'insurance'].forEach((kind) => {
      const pick = chosen(panel, kind);

      if (pick) rows.push([pick.dataset.label, pick.dataset.priceLabel]);
    });

    return rows;
  }

  function spend(panel) {
    return ['seat_out', 'seat_ret', 'meal', 'insurance']
      .reduce((total, kind) => total + price(chosen(panel, kind)), 0);
  }

  /* The sidebar: who bought what, then what it comes to. */
  function retotal() {
    if (!summary || !body) return;

    body.innerHTML = panels.map((panel, index) => {
      const who = qs('.pax-tab__name', tabs[index])?.textContent.trim() ?? `Passenger ${index + 1}`;
      const rows = lines(panel)
        .map(([name, amount]) => `<div class="price-row"><dt>${name}</dt><dd class="price-row__value m-0">${amount}</dd></div>`)
        .join('');

      return `<div class="addon-summary__group"><p class="addon-summary__who">${who}</p>`
        + `<dl class="addon-summary__list">${rows}</dl></div>`;
    }).join('');

    const addOns = panels.reduce((total, panel) => total + spend(panel), 0);
    const addOnCell = qs('[data-addon-total]', scope);
    const totalCell = qs('[data-grand-total]', scope);

    if (addOnCell) addOnCell.textContent = money(currency, addOns);

    if (totalCell) {
      /* The fare and the taxes are the backend's figures, sitting in the rows
         above; only the add-ons the traveller chose move. */
      const fare = qsa('[data-amount]', scope).reduce((sum, cell) => sum + Number(cell.dataset.amount), 0);

      totalCell.textContent = money(currency, fare + addOns);
    }
  }

  function refresh(index) {
    const line = qs('[data-pax-tab-summary]', tabs[index]);

    if (line) line.textContent = summarise(panels[index]);

    retotal();
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
