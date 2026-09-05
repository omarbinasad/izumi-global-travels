/**
 * Contact page. Loaded by main.js because <body data-page="contact">.
 * It only wires up components; behaviour lives with each component.
 */

import { initValidation } from '../components/validate.js';

export function init() {
  initValidation();
}
