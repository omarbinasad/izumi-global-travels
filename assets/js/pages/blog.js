/**
 * Journal index. Loaded by main.js because <body data-page="blog">.
 * It only wires up components; behaviour lives with each component.
 */

import { initPostFilters } from '../components/post-filter.js';

export function init() {
  initPostFilters();
}
