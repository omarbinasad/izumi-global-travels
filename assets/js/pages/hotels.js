/**
 * Hotel results. Loaded by main.js because <body data-page="hotels">.
 * It only wires up components; behaviour lives with each component.
 */

import { initSaveToggles } from '../components/save-toggle.js';
import { initDateDisplays } from '../components/flight-search.js';
import { initDateRange } from '../components/date-range.js';
import { initSteppers } from '../components/stepper.js';
import { initGuests } from '../components/guests.js';

export function init() {
  initSaveToggles();
  /* The search form at the top writes its dates in words over the native
     control, the same as the one on the landing page. */
  initDateDisplays();
  /* Check-in and check-out are one range, picked in the same themed panel the
     flight search uses rather than the platform's own. */
  initDateRange();
  initSteppers();
  initGuests();
}
