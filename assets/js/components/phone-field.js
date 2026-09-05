/**
 * Phone country field.
 *
 * A native <select> can only render text, so the platform draws its own list
 * with no flags and none of the site's styling. This replaces that list with
 * one built from the select's own options — the select stays in the markup and
 * remains the only value store, so the field submits `contact_phone_country`
 * exactly as before and works untouched with this module absent.
 *
 * The panel carries a search box because the backend's real list is every
 * dialling code in the world, not the handful the static page ships with;
 * the list itself scrolls once it outgrows the panel.
 *
 * The flag is decorative. The dialling code is what identifies the country to
 * a reader, and the code is the only thing submitted.
 */

import { qs, qsa, on } from '../core/dom.js';

/* Matches a country by name or by code, with or without the plus. */
function matches(option, query) {
  if (!query) return true;

  const country = (option.dataset.country ?? '').toLowerCase();
  const code = option.textContent.trim().toLowerCase();

  return country.includes(query) || code.includes(query) || code.replace('+', '').includes(query);
}

export function initPhoneFields(root = document) {
  qsa('[data-phone-code]', root).forEach((field) => {
    const select = qs('select', field);

    if (!select) return;

    const options = [...select.options];
    /* Derived from the shipped path, so the folder is named in one place. */
    const folder = field.dataset.flagFolder ?? '../../assets/images/flags/';

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'phone-code__trigger';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = `
      <img class="phone-code__flag" alt="" width="24" height="16" data-phone-flag>
      <span class="phone-code__value" data-phone-value></span>
      <svg class="icon size-4 phone-code__chevron" aria-hidden="true"><use href="#i-chevron-down"></use></svg>
    `;

    const panel = document.createElement('div');
    panel.className = 'phone-code__panel';
    panel.hidden = true;
    panel.innerHTML = `
      <div class="phone-code__search">
        <svg class="icon size-4 phone-code__search-icon" aria-hidden="true"><use href="#i-search"></use></svg>
        <input class="phone-code__search-input" type="search" autocomplete="off"
               placeholder="Search country or code" aria-label="Search countries" data-phone-search>
      </div>
      <ul class="phone-code__list" data-phone-list>
        ${options.map((option) => `
        <li data-phone-item>
          <button class="phone-code__option" type="button" data-phone-option="${option.value}"
                  aria-current="${option.selected}">
            <img class="phone-code__flag" src="${folder}${option.dataset.flag}.svg" alt="" width="24" height="16">
            <span class="phone-code__code">${option.textContent.trim()}</span>
            <span class="phone-code__country">${option.dataset.country ?? ''}</span>
          </button>
        </li>`).join('')}
      </ul>
      <p class="phone-code__empty" hidden data-phone-empty>No country matches that.</p>
    `;

    field.append(trigger, panel);

    const flag = qs('[data-phone-flag]', trigger);
    const value = qs('[data-phone-value]', trigger);
    const search = qs('[data-phone-search]', panel);
    const list = qs('[data-phone-list]', panel);
    const empty = qs('[data-phone-empty]', panel);
    const items = qsa('[data-phone-item]', panel);

    function sync() {
      const option = select.selectedOptions[0];

      if (!option) return;

      flag.setAttribute('src', `${folder}${option.dataset.flag}.svg`);
      value.textContent = option.textContent.trim();
      trigger.setAttribute('aria-label', `Dialling code, ${option.dataset.country ?? option.value}`);

      qsa('[data-phone-option]', panel).forEach((button) => {
        button.setAttribute('aria-current', String(button.dataset.phoneOption === option.value));
      });
    }

    function filter() {
      const query = search.value.trim().toLowerCase();
      let shown = 0;

      items.forEach((item, index) => {
        const hit = matches(options[index], query);

        item.hidden = !hit;
        if (hit) shown += 1;
      });

      empty.hidden = shown > 0;
      list.hidden = shown === 0;
    }

    /* The panel drops below the field unless there is more room above it. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = panel.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      panel.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function open() {
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      /* Every country is on offer again each time it opens. */
      search.value = '';
      filter();
      place();
      search.focus();
    }

    function close() {
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    function choose(code) {
      select.value = code;
      /* Everything else listens to the select, not to this module. */
      select.dispatchEvent(new Event('change', { bubbles: true }));

      close();
      trigger.focus();
    }

    on(trigger, 'click', () => (panel.hidden ? open() : close()));

    on(panel, 'click', (event) => {
      const option = event.target.closest('[data-phone-option]');

      if (option) choose(option.dataset.phoneOption);
    });

    on(search, 'input', filter);

    /* Enter on the search box takes the first country still on the list. */
    on(search, 'keydown', (event) => {
      if (event.key !== 'Enter') return;

      event.preventDefault();

      const first = items.find((item) => !item.hidden);

      if (first) choose(qs('[data-phone-option]', first).dataset.phoneOption);
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

    on(select, 'change', sync);

    sync();
    /* Off screen, so out of the tab order too: the trigger is the control now. */
    select.tabIndex = -1;
    /* Last: the select only steps aside once there is something to replace it. */
    field.dataset.enhanced = 'true';
  });
}
