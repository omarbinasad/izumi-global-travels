/**
 * Behaviour entry point — the Next.js counterpart of the static build's
 * main.js. Called by components/behaviour/Behaviours.tsx after every route
 * change, once the server-rendered page is in the document.
 *
 * Responsibilities
 *   - Start behaviour that every page needs.
 *   - Load the page module named by <body data-page="...">, if one exists.
 *   - Hand back one function that undoes all of it before the next route.
 *
 * Component behaviour belongs in components/, page behaviour in pages/, and
 * all backend access in lib/services/.
 */

import { openScope } from './core/dom.js';
import { initTheme } from './core/theme.js';
import { initNavigation } from './components/navigation.js';
import { initHeaderShadow } from './components/header.js';
import { initReveal } from './components/reveal.js';
import { initLocale } from './components/locale.js';
import { initToTop } from './components/to-top.js';

/**
 * Page modules. Each value is a dynamic import so a page only downloads its
 * own code.
 */
const pageModules = {
  home: () => import('./pages/home.js'),
  'search-results': () => import('./pages/search-results.js'),
  'flight-details': () => import('./pages/flight-details.js'),
  passengers: () => import('./pages/passengers.js'),
  'add-ons': () => import('./pages/add-ons.js'),
  payment: () => import('./pages/payment.js'),
  blog: () => import('./pages/blog.js'),
  hotels: () => import('./pages/hotels.js'),
  'flight-status': () => import('./pages/flight-status.js'),
  auth: () => import('./pages/auth.js'),
  /* Every account page wires up the same set. */
  'account-profile': () => import('./pages/account.js'),
  'account-bookings': () => import('./pages/account.js'),
  'account-booking': () => import('./pages/account.js'),
  'account-saved': () => import('./pages/account.js'),
  contact: () => import('./pages/contact.js'),
  feedback: () => import('./pages/feedback.js'),
};

/** Starts every behaviour for the current page; returns its teardown. */
export function startBehaviours() {
  const dispose = openScope();
  let disposed = false;

  initTheme();
  initNavigation();
  initHeaderShadow();
  initReveal();
  initLocale();
  initToTop();

  const name = document.body.dataset.page;
  const loader = name && pageModules[name];

  if (loader) {
    loader().then((module) => {
      /* The route may have changed while the module downloaded. */
      if (!disposed) module.init?.();
    });
  }

  return () => {
    disposed = true;
    dispose();
  };
}
