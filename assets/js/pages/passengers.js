/**
 * Passenger step. Loaded by main.js because <body data-page="passengers">.
 * It only wires up components; behaviour lives with each component.
 */

import { initFileField } from '../components/file-field.js';

export function init() {
  initFileField();
}
