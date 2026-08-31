# Claude Code instructions

Static flight-booking frontend, later converted to Laravel Blade.
Stack: semantic HTML5, modern CSS with custom properties, vanilla ES modules.
No framework, no build system, no CSS library, no dependencies.

Details live in `README.md` and `docs/`. Read a doc only when the task needs it.

## Workflow

1. Identify the smallest relevant file set.
2. Inspect only those files before editing.
3. Reuse existing tokens, components and conventions.
4. Make the smallest complete change.
5. Run only the verification relevant to that change.
6. Report changed files and results concisely.

Do not re-analyse the repository for every task, read every doc for a small
edit, restate the folder structure, rewrite unchanged files, explain simple
changes at length, duplicate an existing style or component, add speculative
features or dependencies, or run broad checks when a focused one is enough.

## File safety

- Do not delete, move or replace files without approval.
- Do not modify unrelated files, and preserve the user's own changes.
- Never create a nested project root; this directory is the root.
- Do not commit unless explicitly asked.
- No temporary output, `node_modules` or machine-specific absolute paths.
- Never put secrets or API credentials in a frontend file.

## Styling

- Reuse an existing CSS variable before adding one; add a token only when it is
  reused in at least two places.
- Components use the semantic variables from `1-settings/themes.css`, never
  primitives from `1-settings/tokens.css` and never raw colour values.
- All theme differences stay in `1-settings/themes.css`. Never add a
  `[data-theme="dark"]` rule to a component file.
- No inline CSS. No `!important` without a comment justifying it.
- `main.css` stays an import-only entry point, in its documented order.
- Respect the CSS directory responsibilities (1-settings / 2-base / 3-layout /
  4-components / 5-pages / 6-utilities).
- Do not invent final branding. Placeholders are marked `@brand-pending`.

## HTML and accessibility

- Semantic HTML5 and a logical heading order.
- Every control has a label (`<label for>` or `aria-label`); hints and errors are
  linked with `aria-describedby`.
- `<button>` for actions, `<a>` for navigation.
- Keyboard operable with a visible focus state; keep ARIA states correct.
- Essential content must exist in the HTML, not be produced by JavaScript.
- Do not load `components/*.html` at runtime — they are reference markup for the
  Blade conversion, not a client-side templating system.

## JavaScript

- ES modules everywhere except `core/theme-boot.js`, which must stay a small
  synchronous non-module script.
- Select elements with `data-*` hooks, never styling classes.
- No global variables.
- Component behaviour in `js/components/`, page behaviour in `js/pages/`,
  backend access only in `js/services/`. No endpoint appears in UI code.
- Never rely on JavaScript alone for security-sensitive validation.

## Laravel handoff

- Keep `<!-- BLADE BOUNDARY: … -->` markers accurate around reusable regions.
- Pricing, availability, fare rules, booking, ticketing and payment stay
  server-owned; the frontend only displays what the backend returns.
- Use stable ids and codes (IATA, airline code, `offerId`, `fareId`,
  `segmentId`, `addOnId`, ISO currency), never visible labels.
- Never expose API credentials; never simulate production auth or payment.

## Response style

Report only what changed, which files, which checks were run, and any remaining
placeholders or blockers. Do not paste large unchanged files.
