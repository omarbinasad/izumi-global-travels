/**
 * Landing page. Loaded by main.js because <body data-page="home">.
 * It only wires up components; behaviour lives with each component.
 */

import { initFlightSearch } from '../components/flight-search.js';
import { initGuests } from '../components/guests.js';
import { initRail } from '../components/rail.js';
import { initSaveToggles } from '../components/save-toggle.js';

export function init() {
  initFlightSearch();
  /* The hotels tab holds its own guests and rooms panel. */
  initGuests();
  initRail();
  initSaveToggles();
}
