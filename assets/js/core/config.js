/**
 * Project-wide constants. No secrets, no credentials — this file ships to the
 * browser. API keys and tokens stay on the Laravel server.
 */

/** Must stay in sync with the literal in theme-boot.js. */
export const THEME_STORAGE_KEY = 'izumi-global-travels:theme';

/** The only two values ever stored. */
export const THEMES = Object.freeze({
  LIGHT: 'light',
  DARK: 'dark',
});

/**
 * Used when nothing is stored. The approved design is a light design, so the
 * site does not switch itself to dark just because the OS is dark.
 * Must stay in sync with the fallback in theme-boot.js.
 */
export const DEFAULT_THEME = THEMES.LIGHT;

/**
 * Base path for backend calls. Laravel will serve these routes; the service
 * layer (assets/js/services/) is the only place allowed to read this.
 */
export const API_BASE_URL = '/api';

/** Documented breakpoints. CSS uses the same numbers as media-query literals. */
export const BREAKPOINTS = Object.freeze({
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1440,
});
