/**
 * Flight details step. Loaded by main.js because <body data-page="flight-details">.
 * It only wires up components; behaviour lives with each component.
 */

import { initFareFamily } from '../components/fare-family.js';
import { initPriceToast } from '../components/price-toast.js';

export function init() {
  initFareFamily();
  initPriceToast();
}
