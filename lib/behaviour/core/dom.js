/**
 * Minimal DOM helpers. Selectors use data-* hooks, never styling classes.
 *
 * Under Next.js the page is swapped without a reload, so every listener a
 * behaviour adds must come off again when the route changes. `on()` records
 * what it adds in the active scope; `runScope()` (lib/behaviour/registry.js)
 * opens a scope per route and disposes of it when the route goes.
 */

/** Teardown functions for the current route. */
let activeScope = null;

/** First match, or null. */
export function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

/** All matches as a real array. */
export function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

/** Registers teardown work for the current route (timers, observers). */
export function onDispose(dispose) {
  activeScope?.push(dispose);
}

/** Adds a listener and returns a function that removes it. */
export function on(target, type, handler, options) {
  target.addEventListener(type, handler, options);
  const off = () => target.removeEventListener(type, handler, options);
  onDispose(off);
  return off;
}

/** Opens a scope; returns the function that disposes of everything in it. */
export function openScope() {
  const scope = [];
  activeScope = scope;

  return () => {
    if (activeScope === scope) activeScope = null;
    scope.splice(0).reverse().forEach((dispose) => {
      try {
        dispose();
      } catch {
        /* A node already gone has nothing left to remove. */
      }
    });
  };
}
