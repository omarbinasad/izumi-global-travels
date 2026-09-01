/**
 * Landing page. Loaded by main.js because <body data-page="home">.
 * It only wires up components; behaviour lives with each component.
 */

import { initFlightSearch } from '../components/flight-search.js';
import { initRail } from '../components/rail.js';

export function init() {
  initFlightSearch();
  initRail();
}
