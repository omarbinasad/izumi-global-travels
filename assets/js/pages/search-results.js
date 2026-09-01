/**
 * Search results page. Loaded by main.js because <body data-page="search-results">.
 * It only wires up components; behaviour lives with each component.
 */

import { initFlightSearch } from '../components/flight-search.js';
import { initFilters } from '../components/filters.js';
import { initSortTabs } from '../components/sort-tabs.js';

export function init() {
  /* The "Modify search" disclosure holds the same form as the landing page,
     so the same component initialises it. */
  initFlightSearch();
  initFilters();
  initSortTabs();
}
