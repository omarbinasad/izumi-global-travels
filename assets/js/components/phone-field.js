/**
 * Phone country field.
 *
 * A native <select> can only render text, so the platform draws its own list
 * with no flags and none of the site's styling. This replaces that list with
 * one built from the select's own options — the select stays in the markup and
 * remains the only value store, so the field submits `contact_phone_country`
 * exactly as before and works untouched with this module absent.
 *
 * The flag is decorative. The dialling code is what identifies the country to
 * a reader, and the code is the only thing submitted.
 */

import { qs, qsa, on } from '../core/dom.js';

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

    const list = document.createElement('ul');
    list.className = 'phone-code__list';
    list.hidden = true;
    list.innerHTML = options.map((option) => `
      <li>
        <button class="phone-code__option" type="button" data-phone-option="${option.value}"
                aria-current="${option.selected}">
          <img class="phone-code__flag" src="${folder}${option.dataset.flag}.svg" alt="" width="24" height="16">
          <span class="phone-code__code">${option.textContent.trim()}</span>
          <span class="phone-code__country">${option.dataset.country ?? ''}</span>
        </button>
      </li>`).join('');

    field.append(trigger, list);

    const flag = qs('[data-phone-flag]', trigger);
    const value = qs('[data-phone-value]', trigger);

    function sync() {
      const option = select.selectedOptions[0];

      if (!option) return;

      flag.setAttribute('src', `${folder}${option.dataset.flag}.svg`);
      value.textContent = option.textContent.trim();
      trigger.setAttribute('aria-label', `Dialling code, ${option.dataset.country ?? option.value}`);

      qsa('[data-phone-option]', list).forEach((button) => {
        button.setAttribute('aria-current', String(button.dataset.phoneOption === option.value));
      });
    }

    /* The list drops below the field unless there is more room above it. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = list.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      list.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function open() {
      list.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      place();
    }

    function close() {
      list.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    on(trigger, 'click', () => (list.hidden ? open() : close()));

    on(list, 'click', (event) => {
      const option = event.target.closest('[data-phone-option]');

      if (!option) return;

      select.value = option.dataset.phoneOption;
      /* Everything else listens to the select, not to this module. */
      select.dispatchEvent(new Event('change', { bubbles: true }));

      close();
      trigger.focus();
    });

    on(field, 'keydown', (event) => {
      if (event.key !== 'Escape' || list.hidden) return;

      event.stopPropagation();
      close();
      trigger.focus();
    });

    on(document, 'pointerdown', (event) => {
      if (!list.hidden && !field.contains(event.target)) close();
    });

    on(select, 'change', sync);

    sync();
    /* Last: the select only steps aside once there is something to replace it. */
    field.dataset.enhanced = 'true';
  });
}
