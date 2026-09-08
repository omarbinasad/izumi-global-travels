/**
 * Hotel results. Loaded by main.js because <body data-page="hotels">.
 * It only wires up components; behaviour lives with each component.
 */

import { initSaveToggles } from '../components/save-toggle.js';

export function init() {
  initSaveToggles();
}
