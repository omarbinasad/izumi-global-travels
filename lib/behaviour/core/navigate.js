/**
 * Page-to-page moves made by a behaviour (a stand-in submit walking to the
 * next step). Next.js registers its router here so the move stays a client
 * navigation; with nothing registered it is an ordinary page load.
 */

/** Fired on window before a behaviour moves on; detail is the target URL.
    The preloader listens for it, as a full page load would have shown it. */
export const NAVIGATION_START = 'app:navigation-start';

let go = (url) => window.location.assign(url);

/** Replaces how navigation happens. Called once by the behaviour runner. */
export function setNavigator(navigator) {
  go = navigator;
}

/** Moves to `url`, a site path such as "/flights/payment". */
export function navigate(url) {
  window.dispatchEvent(new CustomEvent(NAVIGATION_START, { detail: url }));
  go(url);
}
