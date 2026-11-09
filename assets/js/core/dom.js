/**
 * Minimal DOM helpers. Selectors use data-* hooks, never styling classes.
 */

/** First match, or null. */
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

/** All matches as a real array. */
export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/** Adds a listener and returns a function that removes it. */
export function on(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}
