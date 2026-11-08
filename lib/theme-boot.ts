/*
 * Theme boot — inlined into <head> by app/layout.tsx.
 *
 * Deliberately NOT a module or a React effect: it must run synchronously in
 * <head>, before first paint, so the dark theme never flashes light.
 *
 * Keep it tiny and dependency-free. The storage key and the default below
 * must stay in sync with lib/behaviour/core/config.js.
 */
export const THEME_BOOT_SCRIPT = `(function bootTheme() {
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
})();`;
