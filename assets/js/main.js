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
import { initReveal } from './components/reveal.js';

/**
 * Page modules, added as pages are built. Each value is a dynamic import so
 * a page only downloads its own code.
 */
const pageModules = {
  home: () => import('./pages/home.js'),
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
initReveal();
startPageModule();
