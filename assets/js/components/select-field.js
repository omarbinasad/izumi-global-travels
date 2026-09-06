/**
 * Select field.
 *
 * A native <select> draws its own list, in the platform's colours and with
 * none of the site's styling. This puts the site's own list beside it, built
 * from the select's own options — the select stays in the markup and remains
 * the only value store, so the field submits exactly as before and works
 * untouched with this module absent.
 *
 * Add `data-select` to the `.field__select` wrapper. Add `data-select-search`
 * as well where the list is long enough to want a search box — a nationality
 * is one of roughly two hundred, a gender is one of four.
 *
 * The first option is treated as the prompt when it has no value: it is shown
 * in the muted colour a placeholder gets and is not offered in the list.
 */

import { qs, qsa, on } from '../core/dom.js';

export function initSelectFields(root = document) {
  qsa('[data-select]', root).forEach((field) => {
    const select = qs('select', field);

    if (!select) return;

    const options = [...select.options];
    const prompt = options[0] && options[0].value === '' ? options[0] : null;
    const choices = options.filter((option) => option !== prompt);
    const searchable = 'selectSearch' in field.dataset;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'field__control select-field__trigger';
    trigger.setAttribute('aria-haspopup', 'listbox');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.innerHTML = '<span class="select-field__value" data-select-value></span>';

    if (select.id) {
      const label = qs(`label[for="${select.id}"]`);

      if (label) trigger.setAttribute('aria-label', label.textContent.trim());
    }

    const panel = document.createElement('div');
    panel.className = 'listbox';
    panel.hidden = true;
    panel.innerHTML = `
      ${searchable ? `<div class="listbox__search">
        <svg class="icon size-4 listbox__search-icon" aria-hidden="true"><use href="#i-search"></use></svg>
        <input class="listbox__input" type="search" autocomplete="off"
               placeholder="Search" aria-label="Search the list"
               data-validate-skip data-select-input>
      </div>` : ''}
      <ul class="listbox__list" data-select-list>
        ${choices.map((option) => `
        <li data-select-item>
          <button class="listbox__option" type="button" data-select-option="${option.value}"
                  aria-current="${option.selected}">${option.textContent.trim()}</button>
        </li>`).join('')}
      </ul>
      <p class="listbox__empty" hidden data-select-empty>Nothing matches that.</p>
    `;

    field.append(trigger, panel);

    const value = qs('[data-select-value]', trigger);
    const search = qs('[data-select-input]', panel);
    const list = qs('[data-select-list]', panel);
    const empty = qs('[data-select-empty]', panel);
    const items = qsa('[data-select-item]', panel);

    function sync() {
      const option = select.selectedOptions[0];

      value.textContent = option ? option.textContent.trim() : '';
      /* The prompt is not an answer, so it is not painted like one. */
      trigger.dataset.selectEmpty = String(!option || option === prompt);

      qsa('[data-select-option]', panel).forEach((button) => {
        button.setAttribute('aria-current', String(option ? button.dataset.selectOption === option.value : false));
      });
    }

    function filter() {
      if (!search) return;

      const query = search.value.trim().toLowerCase();
      let shown = 0;

      items.forEach((item, index) => {
        const hit = choices[index].textContent.toLowerCase().includes(query);

        item.hidden = !hit;
        if (hit) shown += 1;
      });

      empty.hidden = shown > 0;
      list.hidden = shown === 0;
    }

    /* The list drops below the field unless there is more room above it. */
    function place() {
      const box = field.getBoundingClientRect();
      const height = panel.getBoundingClientRect().height;
      const below = window.innerHeight - box.bottom;

      panel.dataset.drop = (height + 16 > below && box.top > below) ? 'up' : 'down';
    }

    function open() {
      panel.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');

      if (search) {
        search.value = '';
        filter();
      }

      place();

      const current = qs('[aria-current="true"]', list);

      if (current) current.scrollIntoView({ block: 'nearest' });

      (search ?? current ?? qs('.listbox__option', list))?.focus();
    }

    function close() {
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
    }

    function choose(option) {
      select.value = option;
      /* Everything else listens to the select, not to this module. */
      select.dispatchEvent(new Event('change', { bubbles: true }));

      close();
      trigger.focus();
    }

    on(trigger, 'click', () => (panel.hidden ? open() : close()));

    on(panel, 'click', (event) => {
      const option = event.target.closest('[data-select-option]');

      if (option) choose(option.dataset.selectOption);
    });

    if (search) {
      on(search, 'input', filter);

      /* Enter on the search box takes the first option still on the list. */
      on(search, 'keydown', (event) => {
        if (event.key !== 'Enter') return;

        event.preventDefault();

        const first = items.find((item) => !item.hidden);

        if (first) choose(qs('[data-select-option]', first).dataset.selectOption);
      });
    }

    /* The list is long enough that the arrow keys are the way through it. */
    on(panel, 'keydown', (event) => {
      const step = event.key === 'ArrowDown' ? 1 : event.key === 'ArrowUp' ? -1 : 0;

      if (step === 0) return;

      const buttons = qsa('.listbox__option', list).filter((button) => !button.closest('li').hidden);
      const index = buttons.indexOf(document.activeElement);

      event.preventDefault();

      if (index === -1) buttons[0]?.focus();
      else buttons[Math.min(Math.max(index + step, 0), buttons.length - 1)].focus();
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

    /* Validation focuses the control it marked; that control is off screen, so
       the trigger standing in for it takes the focus instead. */
    on(select, 'focus', () => trigger.focus());

    sync();
    /* Off screen, so out of the tab order too: the trigger is the control. */
    select.tabIndex = -1;
    /* Last: the select only steps aside once there is something to replace it. */
    field.dataset.enhanced = 'true';
  });
}
