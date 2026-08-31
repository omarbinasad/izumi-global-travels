/**
 * Interactive theme behaviour.
 *
 * Pre-paint resolution happens in theme-boot.js. This module owns everything
 * afterwards: reading and writing the preference, and keeping the switch's
 * accessible state correct.
 *
 * There are exactly two themes, light and dark. The site does not follow the
 * operating system: the approved design is a light design, so light is the
 * default and dark is something the visitor opts into.
 */

import { THEME_STORAGE_KEY, THEMES, DEFAULT_THEME } from './config.js';
import { qs, qsa, on } from './dom.js';

const VALID_THEMES = Object.values(THEMES);
const root = document.documentElement;

/** Reads the stored theme, falling back to the default. */
export function getTheme() {
  let stored = null;

  try {
    stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch (error) {
    stored = null;
  }

  return VALID_THEMES.includes(stored) ? stored : DEFAULT_THEME;
}

/** Applies a theme to the document and persists it. */
export function setTheme(theme) {
  const next = VALID_THEMES.includes(theme) ? theme : DEFAULT_THEME;

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch (error) {
    /* Storage unavailable: the choice still applies for this page view. */
  }

  applyTheme(next);
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  updateThemeColorMeta();
  updateSwitchState(theme);

  document.dispatchEvent(new CustomEvent('theme:change', { detail: { theme } }));
}

/** Keeps the browser UI colour in step with the painted background. */
function updateThemeColorMeta() {
  const meta = qs('meta[name="theme-color"]');

  if (!meta) return;

  /*
   * Read the painted colour from <body>, not the custom property: a
   * light-dark() token returns its unresolved text from getPropertyValue.
   */
  const background = getComputedStyle(document.body).backgroundColor;

  if (background) {
    meta.setAttribute('content', background);
  }
}

/** Mirrors the current theme onto every switch option. */
function updateSwitchState(theme) {
  qsa('[data-theme-option]').forEach((option) => {
    option.setAttribute('aria-pressed', String(option.dataset.themeOption === theme));
  });
}

/** Wires up the theme switch. Safe to call once. */
export function initTheme() {
  applyTheme(getTheme());

  qsa('[data-theme-option]').forEach((option) => {
    on(option, 'click', () => setTheme(option.dataset.themeOption));
  });
}
