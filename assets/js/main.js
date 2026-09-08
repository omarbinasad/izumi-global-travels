/**
 * Entry point. Loaded once per page as <script type="module" src=".../main.js">.
 *
 * Responsibilities
 *   - Start behaviour that every page needs.
 *   - Load the page module named by <body data-page="...">, if one exists.
 *
 * Component behaviour belongs in assets/js/components/, page behaviour in
 * assets/js/pages/, and all backend access in assets/js/services/.
 */

import { initTheme } from './core/theme.js';
import { initNavigation } from './components/navigation.js';
import { initHeaderShadow } from './components/header.js';
import { initReveal } from './components/reveal.js';
import { initLocale } from './components/locale.js';
import { initToTop } from './components/to-top.js';

/**
 * Page modules, added as pages are built. Each value is a dynamic import so
 * a page only downloads its own code.
 */
const pageModules = {
  home: () => import('./pages/home.js'),
  'search-results': () => import('./pages/search-results.js'),
  passengers: () => import('./pages/passengers.js'),
  'add-ons': () => import('./pages/add-ons.js'),
  blog: () => import('./pages/blog.js'),
  hotels: () => import('./pages/hotels.js'),
  auth: () => import('./pages/auth.js'),
  /* Every account page wires up the same set. */
  'account-profile': () => import('./pages/account.js'),
  'account-bookings': () => import('./pages/account.js'),
  'account-booking': () => import('./pages/account.js'),
  'account-saved': () => import('./pages/account.js'),
  contact: () => import('./pages/contact.js'),
  feedback: () => import('./pages/feedback.js'),
};

async function startPageModule() {
  const name = document.body.dataset.page;
  const loader = name && pageModules[name];

  if (!loader) return;

  const module = await loader();
  module.init?.();
}

initTheme();
initNavigation();
initHeaderShadow();
initReveal();
initLocale();
initToTop();
startPageModule();
