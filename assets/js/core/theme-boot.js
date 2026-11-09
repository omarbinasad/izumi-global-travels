/*
 * theme-boot.js
 *
 * Deliberately NOT an ES module: it must run synchronously in <head>, before
 * first paint, so the dark theme never flashes light. Modules are deferred
 * and would paint first.
 *
 * Keep it tiny and dependency-free. The storage key and the default below
 * must stay in sync with config.js.
 */
(function bootTheme() {
  var STORAGE_KEY = 'izumi-global-travels:theme';
  var stored = null;

  try {
    stored = window.localStorage.getItem(STORAGE_KEY);
  } catch (error) {
    /* Private mode or blocked storage: fall through to the default. */
  }

  /* Two themes only. The approved design is light, so light is the default
     and dark is opted into from the header switch. */
  if (stored !== 'light' && stored !== 'dark') {
    stored = 'light';
  }

  document.documentElement.setAttribute('data-theme', stored);
})();
