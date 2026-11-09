/**
 * Add-ons step. Loaded by main.js because <body data-page="add-ons">.
 * It only wires up components; behaviour lives with each component.
 */

import { initAddOns } from '../components/add-ons.js';

export function init() {
  initAddOns();
}
