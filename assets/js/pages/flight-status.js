/**
 * Flight status. Loaded by main.js because <body data-page="flight-status">.
 * It only wires up components; behaviour lives with each component.
 */

import { initDateRange } from '../components/date-range.js';
/* The formatted label over a search date field: the same one the search panel
   puts over its own. */
import { initDateDisplays } from '../components/flight-search.js';

export function init() {
  initDateDisplays();
  initDateRange();
}
